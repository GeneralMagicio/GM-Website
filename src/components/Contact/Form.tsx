import { Button } from '../base/Button'
import { ContactButton } from '../base/ContactButton'
import { Input } from '../base/Input'
import { FormHeader } from './FormHeader'
import { SubmitModal } from './Modal/SubmitModal'

export function ContactForm() {
  const checkboxes = [
    'Token Economics',
    'Prodcut Design',
    'DAO Design',
    'Branding',
    'Full stack development',
    'Copywriting',
    'User research and UX Desgin',
    'HR & Hiring',
    'Swag Shop',
  ]
  return (
    <>
      <div className="pt-12 pb-12 md:pt-32 md:pb-16 px-8 sm:px-16 md:px-36">
        <FormHeader title="Personal Information">
          <div className="grid md:grid-cols-2 gap-7">
            <Input placeholder="First Name" />
            <Input placeholder="E-mail" />
            <Input placeholder="Discord Handle" />
            <Input placeholder="Telegram Handle" />
            <div className="md:col-span-2">
              <Input placeholder="Github Handle" />
            </div>
          </div>
        </FormHeader>
        <FormHeader title="Project Details">
          <div className="grid gap-7">
            <Input placeholder="Project Name" />
            <div className="h-72">
              <textarea
                className="resize-none bg-neutral-900 h-full w-full border border-magicPurple-300 px-7 py-3 focus:outline-none focus:border-pinkPotion-300"
                placeholder="Description"
              />
            </div>
            <Input placeholder="Project Link" />
          </div>
        </FormHeader>
        <FormHeader title="Required Services">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 w-fit gap-y-6 gap-x-2 sm:gap-x-8 md:gap-x-16">
              {checkboxes.map((checkbox) => {
                return (
                  <div key={checkbox} className="w-fit">
                    <input
                      className="appearance-none h-4 w-4 border border-pinkPotion-300 rounded bg-neutral-900 checked:bg-pinkPotion-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                    />
                    <label className="inline">{checkbox}</label>
                  </div>
                )
              })}
            </div>
          </div>
        </FormHeader>
        <FormHeader title="Budget & Timeline">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 w-fit gap-8 mb-7">
              <ContactButton bgColor="gray" border="linear" text="<  $5k" />
              <ContactButton bgColor="gray" border="linear" text="$5k - $25k" />
              <ContactButton
                bgColor="gray"
                border="linear"
                text="$25k - $50k"
              />
              <ContactButton bgColor="gray" border="linear" text="$50k +" />
            </div>
            <h1 className="font-akira text-[26px] w-fit mb-6">
              Expected Deadline
            </h1>
            <div className="button-border w-full sm:w-[369px] relative z-50">
              <input
                type="date"
                className="w-[calc(100%_-_2px)] sm:w-[367px] p-5 hover:bg-opacity-70 m-[1px] bg-neutral-900 font-akira text-center sm:text-xl md:text-[26px]"
              />
            </div>
          </div>
        </FormHeader>
        <FormHeader title="Aditional Information">
          <div className="h-72">
            <textarea
              className="resize-none bg-neutral-900 h-full w-full border border-magicPurple-300 px-7 py-3 focus:outline-none focus:border-pinkPotion-300"
              placeholder="Tell us!"
            />
          </div>
        </FormHeader>
        <div className=" flex justify-center">
          <Button
            url="/contact"
            arrowColor="#ffff"
            bgColor="purple"
            text="Submit"
            breakText={false}
          />
        </div>
      </div>
      <SubmitModal />
    </>
  )
}
