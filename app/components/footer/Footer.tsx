import style from './footer.module.css'
import Image from 'next/image'

// footer for all pages
export default function Footer () {
  return (
    <footer className={style.footer}>
      <div>
        <Image
          src='/Campione_Crest2.avif'
          alt='footer'
          width={400}
          height={200}
          className={style.crest_img}
        />
      </div>

      <div className={style.footer_content}>
        <p>
          101 NORTH MAIN ST, LIVINGSTON, MONTANA <span>MAP</span>
        </p>
        <p>
          CALL <span>(406) 333-2427</span> or email us at{' '}
          <span>Events@eatcampione.com</span>
        </p>
        <p>@ Campione 2021 All rights reserved</p>
      </div>
    </footer>
  )
}
