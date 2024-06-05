import getConfig from "next/config";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "./Nav";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LeadForm from "./LeadForm";
import { useDialog } from "./DialogContext";
import Primarylogo from "../public/images/Primarylogo.svg";
import ExportedImage from "next-image-export-optimizer";
import Script from "next/script";

const { publicRuntimeConfig } = getConfig();

const Layout = ({ children, ...customMeta }) => {
  const router = useRouter();
  const { asPath } = router;
  const { isDialogOpen, closeDialog } = useDialog();

  const { name, url, title, description, socialPreview } =
    publicRuntimeConfig.site;

  const meta = {
    name,
    url,
    title,
    description,
    socialPreview,
    ...customMeta,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/belaazicon" key="favicon" />
        {/* <link rel="canonical" href={`${url}${asPath}`} key="canonical" /> */}

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter_card"
        />
        <meta name="twitter:title" content={meta.title} key="twitter_title" />
        <meta
          name="twitter:description"
          content={meta.description}
          key="twitter_description"
        />
        <meta
          name="twitter:image"
          content={`${url}${socialPreview}`}
          key="twitter_image"
        />

        {/* Open Graph */}
        <meta property="og:url" content={`${url}${asPath}`} key="og_url" />
        <meta property="og:site_name" content={meta.name} key="og_site_name" />
        <meta property="og:title" content={meta.title} key="og_title" />
        <meta
          property="og:description"
          content={meta.description}
          key="og_description"
        />
        <meta
          property="og:image"
          content={`${url}${socialPreview}`}
          key="og_image"
        />
        <meta property="og:image:width" content={`1200`} key="og_image_width" />
        <meta
          property="og:image:height"
          content={`630`}
          key="og_image_height"
        />

        <meta name="description" content={meta.description} key="description" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <title key="title">{meta.title}</title>
      </Head>
      <main>
        <Nav />
        <Transition.Root show={isDialogOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => {}}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-1000 delay-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-1000 delay-1000"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel
                    className="relative transform overflow-hidden rounded-lg bg-slate-200 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl"
                    style={{ background: "#002D73", height: "500px" }}
                  >
                    <ExportedImage
                      src={Primarylogo}
                      loading="lazy"
                      alt="Primarylogo"
                      className="max-h-max object-fill block md:hidden w-full"
                    />
                    <button
                      type="button"
                      className="text-base w-7 h-7 text-gray-900 rounded-full block md:hidden absolute z-10 top-0 right-0 border-gray-900 border"
                      onClick={closeDialog}
                    >
                      <svg
                        className="w-6 h-6 mx-auto p-1"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M3,3 L21,21 M3,21 L21,3"
                        />
                      </svg>
                    </button>
                    <div
                      className="p-4 sm:p-4 sm:pb-4"
                      style={{ background: "#002D73" }}
                    >
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 sm:mt-0 sm:text-left w-full">
                          <div>
                            <LeadForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {children}
      </main>
    </>
  );
};

export default Layout;
