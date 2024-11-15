// Import the agriData
import { agriData } from "./data";

// Define the structure of the agriData items
interface AgriDataItem {
  "Crop Name": string;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"?: number; // Optional property
  "Area Under Cultivation (UOM:Ha(Hectares))"?: number; // Optional property
}

// Define the structure of the return object for each crop
interface CropStatistics {
  CropName: string;
  AverageYield: string; // To match the `.toFixed(3)` output, which is a string
  AverageCultivationArea: string; // Same as above
}

// Utility function to safely parse numbers
const parseNumber = (value: string | number | undefined): number => {
  const parsed = typeof value === "string" ? parseFloat(value) : value;
  return isNaN(parsed as number) ? 0 : (parsed as number);
};

// TypeScript version of the function
export const getAvgYieldAndCultivation = (): CropStatistics[] => {
  // Group data by crop
  const groupedByCrop: Record<string, AgriDataItem[]> = agriData.reduce((acc, curr) => {
    if (!curr || !curr["Crop Name"]) return acc; // Ensure the current item is valid

    // Convert numeric fields from string to number
    const parsedItem: AgriDataItem = {
      "Crop Name": curr["Crop Name"],
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": parseNumber(
        curr["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
      ),
      "Area Under Cultivation (UOM:Ha(Hectares))": parseNumber(curr["Area Under Cultivation (UOM:Ha(Hectares))"]),
    };

    if (!acc[parsedItem["Crop Name"]]) {
      acc[parsedItem["Crop Name"]] = [];
    }
    acc[parsedItem["Crop Name"]].push(parsedItem);
    return acc;
  }, {} as Record<string, AgriDataItem[]>);

  // Calculate average yield and average cultivation area for each crop
  const cropStatistics: CropStatistics[] = Object.keys(groupedByCrop).map((cropName) => {
    const cropData = groupedByCrop[cropName];

    // Calculate the total yield and area, handling optional values
    const yieldSum = cropData.reduce(
      (sum: number, item: AgriDataItem) => sum + (item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0),
      0
    );
    const areaSum = cropData.reduce(
      (sum: number, item: AgriDataItem) => sum + (item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0),
      0
    );

    // Calculate averages
    const totalYears = cropData.length;

    return {
      CropName: cropName,
      AverageYield: (yieldSum / totalYears).toFixed(3),
      AverageCultivationArea: (areaSum / totalYears).toFixed(3),
    };
  });

  return cropStatistics;
};
