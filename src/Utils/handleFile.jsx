export const handleFileNameChange = (event, setFileNameFun) => {
  const file = event?.target?.files[0];
  if (file) {
    setFileNameFun(file.name);
  } else {
    setFileNameFun('');
  }
};

export const handleChange = (event, setState) => {
  const { name, value } = event.target;
  setState((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

export const handleFileUpload = (event, fieldName, setState) => {
  const file = event?.target?.files[0];
  setState((prevState) => ({
    ...prevState,
    [fieldName]: file || null,
  }));
};

export const handleSubmit = (event, jobApplication, resetForm) => {
  event.preventDefault();
  console.log('Job Application Data:', jobApplication);
  resetForm();

  // Example API call
  // fetch('/api/job-apply', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(jobApplication),
  // }).then(response => console.log('Form submitted successfully:', response));
};