import React, { useState } from 'react';

const RegisterForm = () => {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [dataUser, setDataUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi
    if (!form.nama || !form.email || !form.password || !form.confirmPassword) {
      setError('Semua field wajib diisi!');
      setSuccess('');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Password tidak cocok!');
      setSuccess('');
      return;
    }

    // Jika valid
    setDataUser({
      nama: form.nama,
      email: form.email
    });

    setSuccess('Pendaftaran berhasil!');
    setError('');

    // Reset form
    setForm({
      nama: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div>
      <h2>Form Pendaftaran</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Nama Lengkap"
          value={form.nama}
          onChange={handleChange}
        /><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        /><br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Konfirmasi Password"
          value={form.confirmPassword}
          onChange={handleChange}
        /><br />
        <button type="submit">Daftar</button>
      </form>

      {dataUser && (
        <div style={{ marginTop: '20px' }}>
          <h3>Data Pendaftar:</h3>
          <p>Nama: {dataUser.nama}</p>
          <p>Email: {dataUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
