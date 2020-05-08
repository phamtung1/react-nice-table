import LocalDataService from './LocalDataService';
import { DataResultModel, RemoteDataFn, DataQueryModel } from '../types/DataModel';

function loadRemoteData(remoteDataFn:RemoteDataFn, params: DataQueryModel) : Promise<DataResultModel> {
  return remoteDataFn(params);
}

function loadLocalData(data:any[], params: DataQueryModel) : Promise<DataResultModel> {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      const result = LocalDataService.getShowingData(params, data);
      resolve(result);
    }, 50);
  });
}

function loadData(data: any[] | RemoteDataFn, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string){
  const params:DataQueryModel = {
    filterData: filterData,
    pageIndex: pageIndex,
    pageSize: pageSize,
    sortBy: sortBy,
    sortOrder: sortOrder
  };

  return Array.isArray(data) ? loadLocalData(data, params) : loadRemoteData(data as RemoteDataFn, params) ;
}

export default {
  loadData: loadData
};