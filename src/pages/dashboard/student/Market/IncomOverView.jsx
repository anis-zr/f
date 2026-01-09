
import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export default function BarChartComponent({ data, wilaya }) {
  // تحقق من صحة البيانات
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-center text-gray-500">لا توجد بيانات متاحة للعرض</p>;
  }

  const transformedData = data
    .filter(
      (item) =>
        item &&
        typeof item === 'object' &&
        typeof item.quantite === 'number' &&
        typeof item.propose === 'number' &&
        typeof item.product === 'string'
    )
    .map((item) => ({ ...item }));

  const chartConfig = {
    propose: { label: 'الموصى', color: 'hsl(var(--chart-2))' },
    quantite: { label: 'المُحصل', color: 'hsl(var(--chart-1))' },
  };

  return (
    <Card className="w-full md:w-[500px] text-lg scale-105 shadow-lg border border-gray-200 transition-transform duration-300">
  

      <CardHeader>
        <CardTitle className="text-xl font-semibold text-green-700">📊 إحصائيات الإنتاج</CardTitle>
        <CardDescription className="text-gray-500">الولاية: {wilaya}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={transformedData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="product" tickMargin={10} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="quantite"
                stackId="a"
                fill="hsl(var(--chart-1))"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="propose"
                stackId="a"
                fill="hsl(var(--chart-2))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <span className="ml-2">الوحدة: هكتار</span>
        <span className="text-green-600">■</span>
      </CardFooter>
    </Card>
  );
}