import Head from 'next/head'
import { ReactElement } from 'react'
import { ShopAreYouReady } from '../components/Shop/AreYouReady'
import { ShopFeatures } from '../components/Shop/Features'
import { ShopHero } from '../components/Shop/Hero'
import { ShopLaunch } from '../components/Shop/Launch'
import { ShopLaunchCallToAction } from '../components/Shop/LaunchCallToAction'
import { OwnSwagShop } from '../components/Shop/OwnSwagShop'
import { ShopWhatOthers } from '../components/Shop/WhatOthers'
import { AppLayout } from '../layouts/AppLayout'
import { NextPageWithLayout } from './_app'

const Shop: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Shop | General Magic</title>
      </Head>
      <ShopHero />
      <OwnSwagShop />
      <ShopLaunch />
      <ShopFeatures />
      <ShopAreYouReady />
      <ShopWhatOthers />
      <ShopLaunchCallToAction />
    </>
  )
}

Shop.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Shop