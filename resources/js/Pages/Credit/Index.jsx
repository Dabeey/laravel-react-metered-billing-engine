import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PackagesPricingCards from '@/Components/PackagesPricingCards';
import { usePage } from '@inertiajs/react';
import { Head, Link } from '@inertiajs/react';

export default function Index({ packages, features, success, error }) {

    const { auth } = usePage().props;
    const availableCredits = auth.user.available_credits;

    return (
        <AuthenticatedLayout
        user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Your Credits
                </h2>
            }
        >
            <Head title="Your Credits" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Success/Error Messages */}
                    {success && (
                        <div className="mb-4 rounded-lg bg-emerald-500 text-gray-100 p-3 mb-4">
                            {success}
                        </div>
                    )}
                    
                    {error && (
                        <div className="mb-4 rounded-lg bg-red-500 text-gray-100 p-3 mb-4">
                            {error}
                        </div>
                    )}

                    <div className='bg-gray-800 dark:bg-gray-900 max-w-md mx-auto overflow-hidden shadow-sm rounded-lg'>
                        <div className='flex flex-col gap-3 items-center p-6'>
                            <img src='/img/coin.png' alt='coin' className='w-24 h-24' />
                            <h3 className='text-white text-2xl font-semibold'>
                                You have {availableCredits} credits.
                            </h3>
                        </div>
                    </div>


                    <PackagesPricingCards packages={packages.data} features={features.data} />

                </div>
            </div>
        </AuthenticatedLayout>
    );
}