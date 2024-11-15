// Import the agriData
import { agriData } from "./data";

// Define the structure of the agriData items
interface AgriDataItem {
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))"?: string | number; // Can be a string or number
}

// Define the structure of the return object for each year's max and min crop
interface YearlyMaxMinCrop {
  Year: string;
  CropWithMaxProduction: string | undefined;
  CropWithMinProduction: string | undefined;
}

// Utility function to safely parse numbers
const parseNumber = (value: string | number | undefined): number => {
  const parsed = typeof value === "string" ? parseFloat(value) : value;
  return isNaN(parsed as number) ? 0 : (parsed as number);
};

// TypeScript version of the function
export const calculateMaxMinCrop = (): YearlyMaxMinCrop[] => {
  // Group data by year
  const groupedByYear = agriData.reduce<Record<string, AgriDataItem[]>>((acc, curr: AgriDataItem) => {
    // Extract the year from the "Year" field
    const year = curr.Year.split(",").pop()?.trim() || "";

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push({
      ...curr,
      "Crop Production (UOM:t(Tonnes))": parseNumber(curr["Crop Production (UOM:t(Tonnes))"]),
    });
    return acc;
  }, {});

  // Calculate max and min crop for each year
  const maxMinCrops: YearlyMaxMinCrop[] = Object.keys(groupedByYear).map((year) => {
    const yearData = groupedByYear[year];

    // Find the crop with the maximum production
    const maxCrop = yearData.reduce((prev, curr) => {
      return (
        (prev["Crop Production (UOM:t(Tonnes))"] || 0) >
        (curr["Crop Production (UOM:t(Tonnes))"] || 0)
          ? prev
          : curr
      );
    });

    // Find the crop with the minimum production
    const minCrop = yearData.reduce((prev, curr) => {
      return (
        (prev["Crop Production (UOM:t(Tonnes))"] || Infinity) <
        (curr["Crop Production (UOM:t(Tonnes))"] || Infinity)
          ? prev
          : curr
      );
    });

    return {
      Year: year,
      CropWithMaxProduction: maxCrop["Crop Name"],
      CropWithMinProduction: minCrop["Crop Name"],
    };
  });

  return maxMinCrops;
};
