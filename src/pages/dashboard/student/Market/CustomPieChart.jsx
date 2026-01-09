// components/WilayaPieChart.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#a855f7", "#ef4444"];

const renderCustomizedLabel = ({ percent, x, y, cx, cy, name }) => {
  const radius = 90;
  const angle = Math.atan2(y - cy, x - cx);
  const labelX = cx + radius * Math.cos(angle);
  const labelY = cy + radius * Math.sin(angle);
  return (
    <text
      x={labelX}
      y={labelY}
      fill="#333"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length > 0) {
    const { name, value, percent } = payload[0];
    return (
      <div className="bg-white border shadow-sm rounded px-3 py-2 text-sm">
        <p className="font-semibold">{name}</p>
        <p>    الكمية:    {value.toLocaleString()} طن</p>
       
      </div>
    );
  }
  return null;
};

export default function CustomPieChart({ data }) {
  if (!data || Object.keys(data).length === 0) return null;

  const pieData = Object.entries(data).map(([wilaya, quantite]) => ({
    name: wilaya,
    value: quantite,
  }));

  return (
    <Card className="shadow-md border border-green-200">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-green-700 font-bold">
          🥧 توزيع الإنتاج حسب الولايات
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-gray-700 font-medium">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}