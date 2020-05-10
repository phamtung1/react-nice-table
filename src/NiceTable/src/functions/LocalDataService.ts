import { FilterDataModel, DataQueryModel, DataResultModel } from '../types/DataModel';

function isMatchFilter(rowData:any, filterData:FilterDataModel) : boolean {
    for(var propt in filterData) {
      const filter = filterData[propt]; // { value: '', rule: '' }}
      if(typeof(filter.value) === 'string') {
        if(filter.value != '' && rowData[propt].indexOf(filter.value)<0){
            return false;
        }
      }
      else if(typeof(filter.value) === 'number') {
        if(!isNaN(filter.value)) {
          const evalText = rowData[propt] + filter.rule + filter.value;
          if(!eval(evalText)){
            return false;
          }
        }
      }
    }
  
    return true;
  }

function createCompareFn(key:string, order:string = 'asc') {
  return function innerSort(a:any, b:any):number {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

function getShowingData(params: DataQueryModel, data:any[]) : DataResultModel {

    if(typeof(data) === 'function'){
      return {
        totalRows: 0,
        currentPageData: []
      } 
    }
  
    let result = data;
  
    if(params.filterData){
      result = result.filter((rowData:any) => isMatchFilter(rowData, params.filterData));
    }
  
    const totalRows = result.length

    if(params.sortBy)
    {
      result = result.sort(createCompareFn(params.sortBy, params.sortOrder || 'asc'));
    }

    if(!params.pageSize){
      return {
        totalRows: totalRows,
        currentPageData: result
      } 
    }
  
    const filteredData = result;
    result = result.slice(params.pageIndex * params.pageSize, params.pageIndex * params.pageSize + params.pageSize);
    return {
      totalRows: totalRows,
      currentPageData: result,
      filteredData: filteredData
    }
  }
  

  export default {
    getShowingData: getShowingData
  };