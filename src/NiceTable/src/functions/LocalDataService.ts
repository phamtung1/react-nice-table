import { FilterDataType } from '../types/FilterDataType';

function isMatchFilter(rowData:any, filterData:FilterDataType) {
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
  return function innerSort(a:any, b:any) {
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

function getShowingData(
  data:any[], 
  pageIndex:number,
  pageSize:number, 
  filterData:FilterDataType,
  sortBy?:string,
  sortOrder?:string){

    if(typeof(data) === 'function'){
      return {
        totalRows: 0,
        data: []
      } 
    }
  
    let result = data;
  
    if(filterData){
      result = result.filter((rowData:any) => isMatchFilter(rowData, filterData));
    }
  
    const totalRows = result.length

    if(sortBy)
    {
      result = result.sort(createCompareFn(sortBy, sortOrder || 'asc'));
    }

    if(!pageSize){
      return {
        totalRows: totalRows,
        data: result
      } 
    }
  
    result = result.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    return {
      totalRows: totalRows,
      data: result
    } 
  }
  

  export default {
    getShowingData: getShowingData
  };