import React, {useEffect, useState} from 'react';

const ToggleTheme = () => {

  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document.querySelectorAll("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className="main-header__toggle">
        <label>
          <input type="checkbox" onChange={() => toggleThemeChange()} />
        </label>
    </div>
  );
}

export default ToggleTheme;
