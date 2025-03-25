import EventSlider from '../components/sliders/EventSlider'
import styles from './event.module.css'
export default function EventPage () {
  return (
    <div>
      <div className={styles.eventcontent}>
        <h2>CATERING</h2>
        <p>
          Allow Campione to cater for your next event. From Weddings to small
          gatherings, informal buffets to plated events, and large pre-packaged
          meals to pick up and reheat at home. We look forward to offering you
          and your guests thoughtful, satisfying, inspired options to compliment
          your next gathering.
        </p>
        <p>
          Please give us a <span>call</span> or send us an <span>email </span>{' '}
          for further details
        </p>
      </div>

      <div className={styles.slider}>
        <EventSlider />
      </div>
    </div>
  )
}
