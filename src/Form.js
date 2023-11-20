import React, { useEffect, useState } from 'react';

const MyForm = () => {
    const [formData, setFormData] = useState({
        block: '',
        gp: '',
        vendorName: '',
        scope: '',
        dateOfEntry: '',
        workDone: '',
        labour: '',
        totalWorkDone: '',
      });
    
      const [entries, setEntries] = useState([]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    

      const [uniqueDates, setUniqueDates] = useState([]);

      useEffect(() => {
          let dates = [];
          entries.forEach(item => {
            dates.push(item.dateOfEntry);
        });
          // Filter out unique dates and sort them
          const uniqueDates = Array.from(new Set(dates)).sort();
          setUniqueDates(uniqueDates);
      }, [entries]);
      console.log(uniqueDates)

      const handleAddEntry = () => {
        // Create a copy of entries array and add the current formData
        const updatedEntries = [...entries, { ...formData }];
    
        // Group entries by vendor name, gp, and block
        // const groupedEntries = updatedEntries.reduce((acc, entry) => {
        //   const key = `${entry.vendorName}/${entry.gp}/${entry.block}`;
        //   acc[key] = acc[key] || [];
        //   acc[key].push({
        //     dateOfEntry: entry.dateOfEntry,
        //     labour: entry.labour,
        //     totalWorkDone: entry.totalWorkDone,
        //   });
        //   return acc;
        // }, {});

        // const groupedEntriesArray = Object.values(groupedEntries);

        //   console.log(groupedEntriesArray)
      
          // Set the state with the updated entries and combined data
          setEntries(updatedEntries);
    
          console.log(updatedEntries)
        // Reset the form data
        setFormData({
          block: '',
          gp: '',
          vendorName: '',
          scope: '',
          dateOfEntry: '',
          workDone: '',
          labour: '',
          totalWorkDone: '',
        });
      };


    //   const generateReport = () => {
    //     // Group entries by date
    //     const groupedEntries = updatedEntries.reduce((acc, entry) => {
    //         const key = `${entry.vendorName}-${entry.gp}-${entry.block}`;
    //         acc[key] = acc[key] || [];
    //         acc[key].push({
    //           dateOfEntry: entry.dateOfEntry,
    //           labour: entry.labour,
    //           totalWorkDone: entry.totalWorkDone,
    //         });
    //         return acc;
    //       }, {});

    //     console.log(groupedEntries)
    
    //     // Get unique dates
    //     const dates = Object.keys(groupedEntries);
    //     console.log(dates)
    //     // Generate the report table
    //     const reportTable = (
    //       <table className="table">
    //         <thead>
    //           <tr>
    //             <th>S.No.</th>
    //             <th>Block</th>
    //             <th>GP</th>
    //             <th>Vendor</th>
    //             <th>Work Done As On Date</th>
    //             {dates.map((date, index) => (
    //               <th key={index}>{date}</th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {entries.map((entry, index) => (
    //             <tr key={index}>
    //               <td>{index + 1}</td>
    //               <td>{entry.block}</td>
    //               <td>{entry.gp}</td>
    //               <td>{entry.vendorName}</td>
    //               <td>{entry.workDone}</td>
    //               {dates.map((date, innerIndex) => (
    //                 <td key={innerIndex}>
    //                   {groupedEntries[date]
    //                     .filter((groupedEntry) => groupedEntry.dateOfEntry === date)
    //                     .map((groupedEntry, innerInnerIndex) => (
    //                       <div key={innerInnerIndex}>
    //                         Labour: {groupedEntry.labour}, Work Done: {groupedEntry.totalWorkDone}
    //                       </div>
    //                     ))}
    //                 </td>
    //               ))}
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     );
    
    //     return reportTable;
    //   };

  return (
    <div className="container mt-5">
      <form>

        <div className="row mb-3">
          <div className="col-sm-2">
            <label htmlFor="block" className="form-label">Block</label>
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="block"
              name="block"
              value={formData.block}
              onChange={handleChange}
              placeholder="Enter Field Block"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-2">
            <label htmlFor="gp" className="form-label">GP</label>
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="gp"
              name="gp"
              value={formData.gp}
              onChange={handleChange}
              placeholder="Enter GP"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-2">
            <label htmlFor="vendorName" className="form-label">Vendor Name</label>
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="vendorName"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleChange}
              placeholder="Enter Vendor Name"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-2">
            <label htmlFor="scope" className="form-label">Scope</label>
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="scope"
              name="scope"
              value={formData.scope}
              onChange={handleChange}
              placeholder="Enter Scope"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-2">
            <label htmlFor="dateOfEntry" className="form-label">Date</label>
          </div>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="dateOfEntry"
              name="dateOfEntry"
              value={formData.dateOfEntry}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-2">
            <label htmlFor="workDone" className="form-label">Work Done As On Date</label>
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="workDone"
              name="workDone"
              value={formData.workDone}
              onChange={handleChange}
              placeholder="Enter Work Done As On Date"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-2">
            <label className="form-label">Resource Tab</label>
          </div>
          <div className="col-sm-10">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="labour" className="form-label">Labour</label>
                <input
                  type="text"
                  className="form-control"
                  id="labour"
                  name="labour"
                  value={formData.labour}
                  onChange={handleChange}
                  placeholder="Enter Labour"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="totalWorkDone" className="form-label">Total Work Done</label>
                <input
                  type="text"
                  className="form-control"
                  id="totalWorkDone"
                  name="totalWorkDone"
                  value={formData.totalWorkDone}
                  onChange={handleChange}
                  placeholder="Enter Total Work Done"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <button type="button" className="btn btn-success" onClick={handleAddEntry}>
              Add
            </button>
          </div>
        </div>

{/*    
        <div>
          <h2>Entries:</h2>
          <pre>{JSON.stringify(entries, null, 2)}</pre>
        </div> */}
<div>
  <h2>Entries:</h2>
  <div className="container">
  <table className="table">
  <thead>
  <tr>
    <th>Vendor Name</th>
    <th>GP</th>
    <th>Block</th>
    {uniqueDates.map(date => (
      <th key={date} colSpan={2}>
        {date}
      </th>
    ))}
  </tr>
  {uniqueDates.length > 0 && (
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th>Labour</th>
      <th>Total Work Done</th>
    </tr>
  )}
</thead>

<tbody>
  {entries.map((entry, index) => {
    // Check if the vendorName is encountered for the first time
    const isFirstVendor = index === 0 || entries[index - 1].vendorName !== entry.vendorName;

    return (
      <tr key={index}>
        {/* Render the vendorName only if it's the first occurrence */}
        {isFirstVendor && <td>{entry.vendorName}</td>}
        <td>{entry.gp}</td>
        <td>{entry.block}</td>
        {uniqueDates.map(date => {
          const matchingEntry = entries.find(
            e => e.dateOfEntry === date && e.vendorName === entry.vendorName
          );
          return (
            <React.Fragment key={date}>
              <td>{matchingEntry ? matchingEntry.labour : ''}</td>
              <td>{matchingEntry ? matchingEntry.totalWorkDone : ''}</td>
            </React.Fragment>
          );
        })}
      </tr>
    );
  })}
</tbody>
  </table>
        </div>
</div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default MyForm;


