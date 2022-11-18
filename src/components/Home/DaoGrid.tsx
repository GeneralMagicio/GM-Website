import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import panvalaLogo from 'public/images/logo/panvalaLogo.svg'
import TECLogo from 'public/images/logo/TEClogo.svg'
import EVMLogo from 'public/images/logo/EVMLogo.svg'
import GivethLogo from 'public/images/logo/GivethLogo.svg'
import CSLogo from 'public/images/logo/CSlogo.svg'
import TSLogo from 'public/images/logo/TSLogo.svg'
import ClrLogo from 'public/images/logo/ClrFundLogo.svg'
import AragonLogo from 'public/images/logo/AragonLogo.svg'
import ENSHomeLogo from 'public/images/logo/ENSHomeLogo.svg'
import TEAcademyLogo from 'public/images/logo/TEAcademyLogo.svg'
import aguila from 'public/images/aguila.png'

export function DaoGrid() {
  const daos = {
    zeroRow: [
      {
        name: 'Clr Fund',
        image: ClrLogo,
        url: 'https://clr.fund/#/',
      },
      {
        name: 'Aragon',
        image: AragonLogo,
        url: 'https://blog.aragon.org/',
      },
    ],
    firstRow: [
      {
        name: 'Panvala',
        image: panvalaLogo,
        url: 'https://www.panvala.com/',
      },
      {
        name: 'TEC',
        image: TECLogo,
        url: 'https://tecommons.org/',
      },
    ],
    secoundRow: [
      {
        name: 'EVM Crispr',
        image: EVMLogo,
        url: 'https://evmcrispr.blossom.software/#/',
      },
      {
        name: 'Giveth',
        image: GivethLogo,
        url: 'https://giveth.io/',
      },
    ],
    thirdRow: [
      {
        name: 'The Commons Stack',
        image: CSLogo,
        url: 'https://commonsstack.org/',
      },
      {
        name: 'Trusted Seed',
        image: TSLogo,
        url: 'https://trustedseed.org/',
      },
    ],
    fourthRow: [
      {
        name: 'ENS',
        image: ENSHomeLogo,
        url: 'https://ens.domains/',
      },
      {
        name: 'TE Academy',
        image: TEAcademyLogo,
        url: 'https://tokenengineering.net/',
      },
    ],
  }
  return (
    <div className="h-grid-line relative">
      <div className="absolute top-5 right-5 z-50 block w-32 sm:hidden">
        <Image src={aguila} alt="making magic happen" />
      </div>
      <div className="grid-col-3 vignette grid gap-[1px] md:grid-cols-5">
        <div className="col-span-2 hidden h-full bg-neutral-900 md:block"></div>
        {daos.zeroRow.map((dao) => {
          return (
            <div className="z-10 hidden h-full items-center justify-center bg-neutral-900 md:flex" key={dao.name}>
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden bg-neutral-900 md:block"></div>
        <div className="z-10 col-span-2 row-span-3 w-full bg-neutral-900 pt-8 pr-10">
          <Title>
            <span className="md:text-4xl dao-md:text-6xl xl:text-7xl">We</span>
            <span className="md:text-4xl  dao-md:text-6xl xl:text-7xl">
              support
            </span>
            <span className="md:text-4xl  dao-md:text-6xl xl:text-7xl">
              DAO&apos;S
            </span>
          </Title>
          <Subtitle paddingBottom={true} paddingTop={true}>
            <span className="max-w-[440px] ">
              that create greater value for the society, and anticipate to build
              a brighter future for the Decentralized Web.
            </span>
          </Subtitle>
        </div>
        {daos.zeroRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="z-10 flex h-full items-center justify-center bg-neutral-900 md:hidden"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        {daos.firstRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="z-10 flex h-full items-center justify-center bg-neutral-900"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden bg-neutral-900 md:block"></div>
        {daos.secoundRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="z-10 flex h-full items-center justify-center bg-neutral-900"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden bg-neutral-900 md:block"></div>
        {daos.thirdRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="z-10 flex h-full items-center justify-center bg-neutral-900"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden bg-neutral-900 md:block"></div>
        <div className="col-span-2 hidden h-full bg-neutral-900 md:block"></div>
        {daos.fourthRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="z-10 flex h-full items-center justify-center bg-neutral-900"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden bg-neutral-900 md:block"></div>
      </div>
    </div>
  )
}
