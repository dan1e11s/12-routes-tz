import { Table, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { getPolyline } from '../../features/polylines/polylines-slice';
import { getPoints } from '../../features/routes/routes-slice';

const RoutesTable = () => {
  const dispatch = useDispatch();

  const dataSource = [
    {
      key: '1',
      route: 'Маршрут 1',
      firstPoint: [59.84660399, 30.29496392],
      secondPoint: [59.82934196, 30.42423701],
      thirdPoint: [59.83567701, 30.38064206],
    },
    {
      key: '2',
      route: 'Маршрут 2',
      firstPoint: [59.82934196, 30.42423701],
      secondPoint: [59.82761295, 30.41705607],
      thirdPoint: [59.84660399, 30.29496392],
    },
    {
      key: '3',
      route: 'Маршрут 3',
      firstPoint: [59.83567701, 30.38064206],
      secondPoint: [59.84660399, 30.29496392],
      thirdPoint: [59.82761295, 30.41705607],
    },
  ];

  const columns = [
    {
      title: 'Маршрут',
      dataIndex: 'route',
      key: 'route',
    },
    {
      title: 'Точка 1',
      dataIndex: 'firstPoint',
      key: 'firstPoint',
      render: (firstPoint) => (
        <>
          {firstPoint.map((point) => (
            <Tag key={point}>{point}</Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Точка 2',
      dataIndex: 'secondPoint',
      key: 'secondPoint',
      render: (secondPoint) => (
        <>
          {secondPoint.map((point) => (
            <Tag key={point}>{point}</Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Точка 3',
      dataIndex: 'thirdPoint',
      key: 'thirdPoint',
      render: (thirdPoint) => (
        <>
          {thirdPoint.map((point) => (
            <Tag key={point}>{point}</Tag>
          ))}
        </>
      ),
    },
  ];

  const rowSelection = {
    onChange: (_, selectedRows) => {
      const points = [
        selectedRows[0].firstPoint,
        selectedRows[0].secondPoint,
        selectedRows[0].thirdPoint,
      ];
      dispatch(getPoints(points));
      dispatch(getPolyline(points));
    },
  };
  return (
    <Table
      pagination={false}
      rowSelection={{
        type: 'radio',
        ...rowSelection,
      }}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default RoutesTable;
