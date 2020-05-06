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

  

function getShowingData(data:any, pageIndex:number, pageSize:number, filterData:FilterDataType){
    if(typeof(data) === 'function'){
      return {
        totalRows: 0,
        data: null
      } 
    }
  
    let result = data;
  
    if(filterData){
      result = result.filter((rowData:any) => isMatchFilter(rowData, filterData));
    }
  
    const totalRows = result.length
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