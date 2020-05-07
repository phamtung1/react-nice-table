import LocalDataService from './LocalDataService';
import { DataResultModel } from '../types/DataModel';

function loadRemoteData(data:(param:any) => Promise<any>, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) 
: Promise<DataResultModel> {
  const query = { pageIndex: pageIndex, pageSize: pageSize, filterData: filterData, sortBy: sortBy, sortOrder: sortOrder};
  return data(query);
}

function loadLocalData(data:any[], pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) 
: Promise<DataResultModel>{
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      const result = LocalDataService.getShowingData(data, pageIndex, pageSize, filterData, sortBy, sortOrder);
      resolve(result);
    }, 50);
  });
}

export default {
  loadRemoteData: loadRemoteData,
  loadLocalData: loadLocalData
};