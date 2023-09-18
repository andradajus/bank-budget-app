function SelectBirthday({ birthDate, onChange }) {
    const handleBirthDateChange = (e) => {
    const selectedBirthdate = e.target.value
    onChange(e)
      }

    return (  
        <>
            <label>Birth Date<span className="text-red-600">*</span></label>  
            <select
                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-red-300 invalid:text-red-300
                    focus:invalid:border-red-300 focus:invalid:ring-red-300"                                                         // for polishing: add a drop downbox with validation on age 18 and below
                    type="text"
                    label="Dito yung birthday"
                    id="birthday"
                    value={birthDate}
                    onChange={handleBirthDateChange}
                    required
                />
        </>
    )
}

export default SelectBirthday