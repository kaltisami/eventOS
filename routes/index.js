const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const scheduleController = require('../controllers/scheduleController');
const taskController = require('../controllers/taskController');
const stageController = require('../controllers/stageController');
const soundCheckController = require('../controllers/soundCheckController');
const performanceController = require('../controllers/performanceController');
const artistController = require('../controllers/artistController');
const crewController = require('../controllers/crewController');
const equipmentController = require('../controllers/equipmentController');
const venueController = require('../controllers/venueController');
const ticketingController = require('../controllers/ticketingController');

/*
EventController: for handling event creation and management endpoints
UserController: for handling user authentication and management endpoints
ScheduleController: for handling schedule management endpoints
TaskController: for handling task management endpoints
StageController: for handling stage setup management endpoints
SoundCheckController: for handling sound check management endpoints
PerformanceController: for handling live performance management endpoints
ArtistController: for handling artist information management endpoints
CrewController: for handling crew information management endpoints
EquipmentController: for handling equipment management endpoints
VenueController: for handling venue information management endpoints
TicketingController: for handling ticketing management endpoints
*/

// EventController: for handling event creation and management endpoints
router.get('/api/events', eventController.getAllEvents);
router.get('/api/events/:id', eventController.getEventById);
router.post('/api/events', eventController.createEvent);
router.put('/api/events/:id', eventController.updateEvent);
router.delete('/api/events/:id', eventController.deleteEvent);

// UserController: for handling user authentication and management endpoints
router.post('/api/auth/register', userController.register);
router.post('/api/auth/login', userController.login);
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

// ScheduleController: for handling schedule management endpoints
router.get('/api/schedules', scheduleController.getAllSchedules);
router.get('/api/schedules/:id', scheduleController.getScheduleById);
router.post('/api/schedules', scheduleController.createSchedule);
router.put('/api/schedules/:id', scheduleController.updateSchedule);
router.delete('/api/schedules/:id', scheduleController.deleteSchedule);

// TaskController: for handling task management endpoints
router.get('/api/tasks', taskController.getAllTasks);
router.get('/api/tasks/:id', taskController.getTaskById);
router.post('/api/tasks', taskController.createTask);
router.put('/api/tasks/:id', taskController.updateTask);
router.delete('/api/tasks/:id', taskController.deleteTask);

// StageController: for handling stage setup management endpoints
router.get('/api/stages', stageController.getAllStages);
router.get('/api/stages/:id', stageController.getStageById);
router.post('/api/stages', stageController.createStage);
router.put('/api/stages/:id', stageController.updateStage);
router.delete('/api/stages/:id', stageController.deleteStage);

// SoundCheckController: for handling sound check management endpoints
router.get('/api/soundchecks', soundCheckController.getAllSoundChecks);
router.get('/api/soundchecks/:id', soundCheckController.getSoundCheckById);
router.post('/api/soundchecks', soundCheckController.createSoundCheck);
router.put('/api/soundchecks/:id', soundCheckController.updateSoundCheck);
router.delete('/api/soundchecks/:id', soundCheckController.deleteSoundCheck);

// PerformanceController
router.get('/api/performances', performanceController.getAllPerformances);
router.get('/api/performances/:id', performanceController.getPerformanceById);
router.post('/api/performances', performanceController.createPerformance);
router.put('/api/performances/:id', performanceController.updatePerformance);
router.delete('/api/performances/:id', performanceController.deletePerformance);

// ArtistController
router.get('/api/artists', artistController.getAllArtists);
router.get('/api/artists/:id', artistController.getArtistById);
router.post('/api/artists', artistController.createArtist);
router.put('/api/artists/:id', artistController.updateArtist);
router.delete('/api/artists/:id', artistController.deleteArtist);

// CrewController
router.get('/api/crews', crewController.getAllCrews);
router.get('/api/crews/:id', crewController.getCrewById);
router.post('/api/crews', crewController.createCrew);
router.put('/api/crews/:id', crewController.updateCrew);
router.delete('/api/crews/:id', crewController.deleteCrew);

// EquipmentController
router.get('/api/equipments', equipmentController.getAllEquipments);
router.get('/api/equipments/:id', equipmentController.getEquipmentById);
router.post('/api/equipments', equipmentController.createEquipment);
router.put('/api/equipments/:id', equipmentController.updateEquipment);
router.delete('/api/equipments/:id', equipmentController.deleteEquipment);

// VenueController
router.get('/api/venues', venueController.getAllVenues);
router.get('/api/venues/:id', venueController.getVenueById);
router.post('/api/venues', venueController.createVenue);
router.put('/api/venues/:id', venueController.updateVenue);
router.delete('/api/venues/:id', venueController.deleteVenue);

// TicketingController
router.get('/api/tickets', ticketingController.getAllTickets);
router.get('/api/tickets/:id', ticketingController.getTicketById);
router.post('/api/tickets', ticketingController.createTicket);
router.put('/api/tickets/:id', ticketingController.updateTicket);
router.delete('/api/tickets/:id', ticketingController.deleteTicket);

module.exports = router;