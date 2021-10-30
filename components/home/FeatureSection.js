import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

const transferFeatures = [
    {
        id: 1,
        name: 'Turn-key Device Onboarding',
        description:`Wether it’s a Z-wave Hub, WiFi device, or Matter connected device we make it easy to onboard your devices into our platform.`,
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: 'Seamless Developer Experience',
        description:`Build scalable apps with the top developer experience in the world. Top notch documentation, 3 minute tutorials, open source examples, and pre-made reciepies for 1 click deploys.`,
           icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Unified API, SDK’s. and Developer Tools',
        description: `A common interface to integrate with thousands of connected smart-home devices. Easy to use SDK’s for the top programming languages. Developer tools to track events, debug, and see logs.`,
             icon: LightningBoltIcon,
    },
]
const communicationFeatures = [
    {
        id: 1,
        name: 'AI Enabled Insights',
        description:  `Using our advanced AI we are constantly looking for errors and issues. Pre-emptive scans can help detect problems before they become real issues. Performance problems.. or connection issues... or cell network issues...`,
              icon: AnnotationIcon,
    },
    {
        id: 2,
        name: 'Self-healing',
        description: `Using our event intelligence we use ability of devZix to self-correct problems and potential problems before they become noticeable to end users`,
        icon: MailIcon,
    },
]

export default function FeatureSection() {
    return (
        <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                <svg
                    className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                </svg>

                <div className="relative">
                    <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to integrate smart-home devices
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                        Developer-first API’s create a seamless integration experience
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                            Build best of breed apps not integrations
                        </h3>
                        <p className="mt-3 text-lg text-gray-500">
                            xxxxxxxx
                        </p>

                        <dl className="mt-10 space-y-10">
                            {transferFeatures.map((item) => (
                                <div key={item.id} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                        <svg
                            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                            width={784}
                            height={404}
                            fill="none"
                            viewBox="0 0 784 404"
                        >
                            <defs>
                                <pattern
                                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                        </svg>


                        <div className={'grid grid-cols-3 px-4 gap-4 place-items-center'}>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/amazone.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/cugust.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/genie.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/honeywell.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/kwikset.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/lifx.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/matter.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/nest.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/philips.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/schlage.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/wave.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="relative mx-auto"
                                    // width={490}
                                    src="/home/logos/yale.png"
                                    alt=""
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <svg
                    className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>

                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Observability done right</h3>
                            <p className="mt-3 text-lg text-gray-500">
                                Our platform provides immersive event logging, error reporting, and advanced debugging into your connect mesh networks, z-wave hubs, etc..
                            </p>

                            <dl className="mt-10 space-y-10">
                                {communicationFeatures.map((item) => (
                                    <div key={item.id} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                            <svg
                                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                                width={784}
                                height={404}
                                fill="none"
                                viewBox="0 0 784 404"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                            </svg>
                            <img
                                className="relative mx-auto"
                                width={490}
                                src="https://tailwindui.com/img/features/feature-example-2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}