import axios from 'axios';

const API_BASE_URL = 'http://localhost.com'; 


const endpoints = {
  getRules: {
    method: 'GET',
    url: '/rules',
  },
  addRule: {
    method: 'POST',
    url: '/rules',
  },
  deleteRule: {
    method: 'DELETE',
    url: (id) => `/rules/${id}`,
  },
  updateRule: {
    method: 'PUT',
    url: (id) => `/rules/${id}`,
  },
  getPreprocessDocumentsIds: {
    method: 'GET',
    url: '/documents/preprocess/ids',
  },
  getDocumentById: {
    method: 'GET',
    url: (id) => `/documents/${id}`,
  },
  updateDocument: {
    method: 'PUT',
    url: (id) => `/documents/${id}`,
  }
};

const apiRequest = async (endpoint, params = {}, data = null) => {
  const { method, url } = endpoint;
  const apiUrl = typeof url === 'function' ? url(...Object.values(params)) : url;

  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${apiUrl}`,
      data,
    });
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const ServiceApi = {
  getRules: () => apiRequest(endpoints.getRules),
  addRule: (ruleData) => apiRequest(endpoints.addRule, ruleData),
  deleteRule: (id) => apiRequest(endpoints.deleteRule, { id }),
  updateRule: (id, ruleData) => apiRequest(endpoints.updateRule, { id, ...ruleData }),
  getPreprocessDocumentsIds: () => apiRequest(endpoints.getPreprocessDocumentsIds),
  getDocumentById: (id) => apiRequest(endpoints.getDocumentById, {id}),
  updateDocument: (id, documentData) => apiRequest(endpoints.updateDocument, { id, ...documentData }),
};