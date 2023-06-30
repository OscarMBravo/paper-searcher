import React from "react";

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (startDate: string) => void;
  onEndDateChange: (endDate: string) => void;
  onApplyDateRange: () => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onApplyDateRange,
}) => {
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const startDateValue = event.target.value;
    onStartDateChange(startDateValue);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const endDateValue = event.target.value;
    onEndDateChange(endDateValue);
  };

  return (
    <div>
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <input
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={handleEndDateChange}
      />

      <button onClick={onApplyDateRange}>Apply</button>
    </div>
  );
};

export default DateRangePicker;
