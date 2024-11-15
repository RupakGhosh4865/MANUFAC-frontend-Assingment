import './App.css';
import { Table, Title } from '@mantine/core';
import { calculateMaxMinCrop } from './utils/MaxMinCrop';
import { getAvgYieldAndCultivation } from './utils/AvgYieldAndCultivation';

// Define the types for the data returned by utility functions
interface MaxMinCropData {
  Year: string;
  CropWithMaxProduction: string | undefined;
  CropWithMinProduction: string | undefined;
}

interface AvgYieldCultivationData {
  CropName: string;
  AverageYield: string; // Assuming .toFixed() makes it a string
  AverageCultivationArea: string;
}

function App() {
  const maxMinCrops = calculateMaxMinCrop().map((cropData: MaxMinCropData) => (
    <tr key={cropData.Year}>
      <td>{cropData.Year}</td>
      <td>{cropData.CropWithMaxProduction}</td>
      <td>{cropData.CropWithMinProduction}</td>
    </tr>
  ));

  const avgYieldAndCultivation = getAvgYieldAndCultivation().map(
    (cropData: AvgYieldCultivationData) => (
      <tr key={cropData.CropName}>
        <td>{cropData.CropName}</td>
        <td>{cropData.AverageYield}</td>
        <td>{cropData.AverageCultivationArea}</td>
      </tr>
    )
  );

  return (
    <>
      <Title order={1} className="title--maxmincrop">
        Crops with Maximum and Minimum Production Between the Years 1950-2020
      </Title>
      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        id="Crop--maxProd--minProd"
        className="mb-12"
      >
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production in that Year</th>
            <th>Crop with Minimum Production in that Year</th>
          </tr>
        </thead>
        <tbody>{maxMinCrops}</tbody>
      </Table>

      <Title order={1} className="title--avgyield">
        Average Yield and Cultivation of Crops Between the Years 1950-2020
      </Title>
      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        id="Crop--avgYield"
      >
        <thead>
          <tr>
            <th>Crop</th>
            <th>Average Yield of the Crop Between 1950-2020</th>
            <th>Average Cultivation Area of the Crop Between 1950-2020</th>
          </tr>
        </thead>
        <tbody>{avgYieldAndCultivation}</tbody>
      </Table>
    </>
  );
}

export default App;
