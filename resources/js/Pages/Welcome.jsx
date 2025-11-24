import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, features }) {
    console.log('features prop:', features);

  // Hide background and adjust cards if image fails to load
  const handleImageError = () => {
    document.getElementById('background')?.classList.add('hidden');
  };

  return (
    <>
      <Head title="Welcome" />
      <div className="relative bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen">
        {/* Background image */}
        <img
          id="background"
          src="https://laravel.com/assets/img/welcome/background.svg"
          className="absolute -left-20 top-0 max-w-[877px] pointer-events-none select-none"
          onError={handleImageError}
          alt="background"
        />

        <div className="relative flex flex-col items-center justify-center min-h-screen px-6 lg:px-8">
          {/* Header */}
          <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3 w-full max-w-7xl mx-auto">
            <div className="flex justify-center lg:col-start-2">
              {/* Logo */}
              <svg
                className="h-12 w-auto lg:h-16 text-[#FF2D20]"
                viewBox="0 0 62 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615..."
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Navigation */}
            <nav className="-mx-3 flex flex-1 justify-end">
              {auth.user ? (
                <Link
                  href={route('dashboard')}
                  className="rounded-md px-3 py-2 text-black hover:text-black/70 dark:text-white dark:hover:text-white/80"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href={route('login')}
                    className="rounded-md px-3 py-2 text-black hover:text-black/70 dark:text-white dark:hover:text-white/80"
                  >
                    Log in
                  </Link>
                  <Link
                    href={route('register')}
                    className="rounded-md px-3 py-2 text-black hover:text-black/70 dark:text-white dark:hover:text-white/80"
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </header>

          {/* Features Grid */}
          <main className="mt-6 w-full max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {features.data.map((feature) => (
                <Link
                  key={feature.id}
                  href={route(feature.route_name)}
                  className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-lg ring-1 ring-white/[0.05] hover:text-black/70 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 transition duration-300"
                >
                  {/* Feature icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:h-16 sm:w-16">
                    {/* Replace with actual feature image if available */}
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g fill="#FF2D20">
                        <path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12..." />
                      </g>
                    </svg>
                  </div>

                  {/* Feature info */}
                  <div className="pt-3 sm:pt-5">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {feature.name}
                    </h2>
                    <p className="mt-4 text-sm/relaxed">{feature.description}</p>
                  </div>

                  {/* Arrow icon */}
                  <svg
                    className="h-6 w-6 self-end stroke-[#FF2D20]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </main>

          {/* Footer */}
          <footer className="py-16 text-center text-sm text-black dark:text-white/70">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
