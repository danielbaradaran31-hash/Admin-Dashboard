import ChartCompnent from "./ChartCompnent";

const SalesChart = () => {
  return (
    <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 py-4">
      <div className="flex w-full items-center justify-between px-5">
        <span className="font-bold text-[#202224] text-[24px]"> Verkaufschart</span>
        <select className="outline-none bg-[#fcfdfd] border border-[#d5d5d5] rounded-md px-2 text-[#2b3034]">
          <option>Dieses Jahr</option>
          <option> Dieser Monat</option>
          <option> Diese Woche</option>
        </select>
      </div>
      <ChartCompnent/>
    </div>
  );
};

export default SalesChart;
