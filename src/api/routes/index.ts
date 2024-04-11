import { Router } from "express";
import profileRouter from "./profile.routes";
import scheduleRouter from "./schedule.routes";
import sessionRouter from './session.routes';
import userRouter from './user.routes';
import deityRouter from "./deity.routes";
import healthcheckRouter from "./healthcheck.routes";
import announcementRouter from "./announcement.routes";
import announcementTypeRouter from "./announcementType.routes";
import dayTypeRouter from "./dayType.routes";
import donationRouter from "./donation.routes";
import donationTypeRouter from "./dontationType.routes";
import educationRouter from "./education.routes";
import educationTypeRouter from "./educationType.routes";
import eventRouter from "./event.routes";
import eventDetailsRouter from "./eventDetails.routes";
import eventSponsorshipRouter from "./eventSponsorship.routes";
import eventTypeRouter from "./eventType.routes";
import feesFrequencyRouter from "./feeFrequency.routes";
import galleryRouter from "./gallery.routes";
import galleryTypeRouter from "./galleryType.routes";
import recurrenceTypeRouter from "./recurrenceType.routes";
import serviceRouter from "./service.routes";
import serviceTypeRouter from "./serviceType.routes";
import sponsorshipTypeRouter from "./sponsorshipType.routes";
import timingRouter from "./timing.routes";

const router = Router()

router.use('/profile', profileRouter);
router.use('/schedule', scheduleRouter);
router.use('/session',sessionRouter);
router.use('/user', userRouter);
router.use('/deity', deityRouter);
router.use('/healthcheck', healthcheckRouter);
router.use('/announcements', announcementRouter);
router.use('/announcementType', announcementTypeRouter);
router.use('/dayType', dayTypeRouter);
router.use('/donations', donationRouter);
router.use('/donationType', donationTypeRouter);
router.use('/education', educationRouter);
router.use('/educationType', educationTypeRouter);
router.use('/events', eventRouter);
router.use('/eventDetails', eventDetailsRouter);
router.use('/eventSponsorship', eventSponsorshipRouter);
router.use('/eventType', eventTypeRouter);
router.use('/feesFrequency', feesFrequencyRouter);
router.use('/gallery', galleryRouter);
router.use('/galleryType', galleryTypeRouter);
router.use('/recurrenceType', recurrenceTypeRouter);
router.use('/services', serviceRouter);
router.use('/serviceType', serviceTypeRouter);
router.use('/sponsorshipType', sponsorshipTypeRouter);
router.use('/timings', timingRouter);


export default router;