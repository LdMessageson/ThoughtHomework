import fetch from '../config/fetch'

export const getSideDatasService = () => fetch('api/sideDatas');

export const getHistoryDatasService = () => fetch('api/historyDatas');

export const getContentDatasService = () => fetch('api/agents');


