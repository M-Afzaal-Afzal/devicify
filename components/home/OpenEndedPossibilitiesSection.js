import React from 'react';
import {
    InboxIcon,
    SparklesIcon,
} from '@heroicons/react/outline'

const OpenEndedPossibilitiesSection = () => {
    return (
        <>
            {/* Alternating Feature Sections */}
            <div className="relative pt-16 pb-32 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"/>
                <div className="relative">
                    <div
                        className="lg:mx-auto items-center lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div>
                    <span
                        className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <InboxIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                        Open-ended possibilities
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Our open API provides the best in class developer friendly way to connect smart
                                        home devices to get your applications out to market faster and with less errors
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                        >
                                            Read the docs
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <blockquote>
                                    <div>
                                        <p className="text-base text-gray-500">
                                            &ldquo;Absolutely love the devicify APIs. They are so simple to use.&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-6 w-6 rounded-full"
                                                    src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text-base font-medium text-gray-700">
                                                Donna Hill, Software Engineering Manager
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="mt-12 mb-0 pb-8 sm:-mb-0 lg:m-0 lg:relative">
                            <div className="mx-auto my-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                <img
                                    className="relative mx-auto"
                                    width={490}
                                    src="/home/api.png"
                                    alt=""
                                />
                                {/*<img*/}
                                {/*    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"*/}
                                {/*    src="/home/hero.png"*/}
                                {/*    alt=""*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <div
                        className="lg:mx-auto lg:max-w-7xl place-items-center lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div
                            className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                    <span
                        className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                        Use our hub or onboard your own!
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Instead of connecting to each device individually, we proxy all of the device
                                        communications through a central hub. This could be a Z-wave controller or even
                                        a wifi based thermostat running on Thread.
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                            <div className="pr-4 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                    className="w-full sm:max-w-[460px] mx-auto h-auto lg:w-auto lg:max-w-none"
                                    src="/home/router.png"
                                    alt="Customer profile user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpenEndedPossibilitiesSection;