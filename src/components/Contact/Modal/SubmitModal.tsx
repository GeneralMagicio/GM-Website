import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import succeessSubmit from '../../../../public/images/icons/succeessSubmit.svg'
import failSubmit from '../../../../public/images/icons/failSubmit.svg'
export function SubmitModal() {
  const [dialog, setDialog] = useState(false)
  const [sucess, setSucess] = useState(true)
  return (
    <Dialog
      open={dialog}
      onClose={() => setDialog(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-1/2 w-3/4 md:w-1/2 button-border flex items-center">
          <Dialog.Panel className="mx-auto bg-neutral-900 w-[calc(100%_-_2px)] h-[calc(100%_-_2px)]">
            {sucess ? (
              <div className="flex flex-col items-center justify-center h-full w-full">
                <Image src={succeessSubmit} alt="Success" />
                <h2 className="font-akira text-3xl text-center pt-6 pb-4">
                  Well done
                </h2>
                <div className="text-center px-4">
                  The form was sent successfully, one of our wizards will
                  contact you.
                </div>
                <button
                  onClick={(e) => {
                    setDialog(false)
                  }}
                  className="border border-white px-16 py-3 font-akira mt-6 hover:border-[#00BF76] hover:text-[#00BF76] transition duration-200 outline-none"
                >
                  ok
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full w-full">
                <Image src={failSubmit} alt="Fail" />
                <h2 className="font-akira text-3xl text-center pt-6 pb-4">
                  OPS
                  <span className="tracking-[5px] ml-1">...</span>
                </h2>
                <div className="text-center px-4">
                  Something is not working right, sorry, try again later.
                </div>
                <button
                  onClick={(e) => {
                    setDialog(false)
                  }}
                  className="border border-white px-16 py-3 font-akira mt-6 hover:border-[#F05548] hover:text-[#F05548] transition duration-200 outline-none"
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
