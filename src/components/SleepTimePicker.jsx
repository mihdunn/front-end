
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

const format = 'HH:mm';

const SleepTimePicker = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
      <TimePicker
        value={value ? dayjs(value, format) : null}
        format={format}
        onChange={(time) => onChange(time ? time.format(format) : '')}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default SleepTimePicker;
