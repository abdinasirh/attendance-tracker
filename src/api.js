export const loginUser = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  };
  
  export const signupUser = async (email, password) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  };
  
  export const fetchAttendance = async (token) => {
    const response = await fetch('/api/attendance', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  };
  
  export const markAttendance = async (token, date, status) => {
    const response = await fetch('/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ date, status }),
    });
    return response.ok;
  };
  