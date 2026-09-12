import { PieChart, pieClasses } from "@mui/x-charts/PieChart";

export default function PieChartWithCustomizedLabel({ dataD }) {
  const data = [
    { label: "Entrada", value: dataD.entrada, color: "#248f3f" },
    { label: "Saída", value: dataD.saida, color: "#a03636" },
    { label: "Saldo", value: dataD.saldo, color: "rgb(121, 54, 175)" },
  ];

  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieClasses.arcLabel}`]: {
          fill: "white",
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}
