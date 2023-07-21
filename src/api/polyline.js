import axios from 'axios';

const API_BASE_URL = 'http://router.project-osrm.org';

export const getPolylineApi = async (points) => {
  try {
    const coordinates = points.payload
      .map((point) => `${point[1]},${point[0]}`)
      .join(';');

    const { data } = await axios(
      `${API_BASE_URL}/route/v1/driving/${coordinates}`
    );

    if (data.code !== 'Ok') {
      throw new Error('Ошибка получения маршрута');
    }

    const route = data.routes[0];
    const polyline = route.geometry;

    return polyline;
  } catch (error) {
    throw new Error('Ошибка при обращении к серверу маршрутов');
  }
};
