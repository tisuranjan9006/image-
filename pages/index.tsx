import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // यहाँ लॉगिन लॉजिक आएगी
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>एडमिन इमेज अपलोड</title>
        <meta name="description" content="एडमिन इमेज अपलोड सिस्टम" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">एडमिन लॉगिन</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">यूजरनेम</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">पासवर्ड</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                लॉगिन करें
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">इमेज अपलोड करें</h1>
            {/* यहाँ इमेज अपलोड का कंपोनेंट आएगा */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p>इमेज को यहाँ खींचकर छोड़ें या क्लिक करें</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home; 