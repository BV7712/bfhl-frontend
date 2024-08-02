import React, { useState } from 'react';
import InputForm from './components/InputForm';
import MultiSelect from './components/MultiSelect';
import ResultDisplay from './components/ResultDisplay';

const App = () => {
  const [response, setResponse] = useState(null);
  const [showMultiSelect, setShowMultiSelect] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div>
      <h1>Roll Number : RA2111008020136 </h1>
      <InputForm setResponse={setResponse} setShowMultiSelect={setShowMultiSelect} />
      {showMultiSelect && (
        <fieldset>
          <legend>Multi-Filter</legend>
          <MultiSelect setSelectedOptions={options => setSelectedOptions(options.map(option => option.value))} />
        </fieldset>
      )}
      {response && <ResultDisplay response={response} selectedOptions={selectedOptions} />}
    </div>
  );
};

export default App;
