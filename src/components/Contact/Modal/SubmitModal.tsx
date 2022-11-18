import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import succeessSubmit from 'public/images/icons/succeessSubmit.svg'
import failSubmit from 'public/images/icons/failSubmit.svg'
import Link from 'next/link'

interface SubmitModalProps {
  status: string
  setDialog: Dispatch<SetStateAction<boolean>>
  dialog: boolean
}

export function SubmitModal({ status, dialog, setDialog }: SubmitModalProps) {
  return (
    <Dialog
      open={dialog}
      onClose={() => setDialog(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="button-border flex h-1/2 w-3/4 items-center md:w-1/2">
          <Dialog.Panel className="mx-auto h-[calc(100%_-_2px)] w-[calc(100%_-_2px)] bg-neutral-900">
            {status === 'success' ? (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <Image src={succeessSubmit} alt="Success" />
                <h2 className="pt-6 pb-4 text-center font-akira text-3xl">
                  Well done
                </h2>
                <div className="px-4 text-center">
                  The form was sent successfully, one of our wizards will
                  contact you.
                </div>
                <Link href="/contact">
                  <button
                    onClick={() => {
                      setDialog(false)
                    }}
                    className="mt-6 border border-white px-16 py-3 font-akira outline-none transition duration-200 hover:border-[#00BF76] hover:text-[#00BF76]"
                    >
                    ok
                  </button>
                  </Link>
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <Image src={failSubmit} alt="Fail" />
                <h2 className="pt-6 pb-4 text-center font-akira text-3xl">
                  OPS
                  <span className="ml-1 tracking-[5px]">...</span>
                </h2>
                <div className="px-4 text-center">
                  Something is not working right, sorry, try again later.
                </div>
                <button
                  onClick={() => {
                    setDialog(false)
                  }}
                  className="mt-6 border border-white px-16 py-3 font-akira outline-none transition duration-200 hover:border-[#F05548] hover:text-[#F05548]"
                >
                  ok
                </button>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
