import FIFOQueue from './fifoQueue.js';
import PriorityQueue from './priorityQueue.js';
import RoundRobinQueue from './roundRobinQueue.js';
import { logger } from '../utils/logger.js';

class QueueManager {
  constructor() {
    this.queues = {
      REST: new FIFOQueue(),
      GraphQL: new PriorityQueue(),
      gRPC: new RoundRobinQueue(),
    };
  }

  addRequestToQueue(apiType, request, priority = 0) {
    switch (apiType) {
      case 'REST':
        this.queues.REST.enqueue(request);
        break;
      case 'GraphQL':
        this.queues.GraphQL.enqueue(request, priority);
        break;
      case 'gRPC':
        this.queues.gRPC.enqueue(request);
        break;
      default:
        logger.error(`Unknown API type: ${apiType}`);
    }
    logger.info(`Request added to ${apiType} queue. Queue size: ${this.queues[apiType].size()}`);
  }

  processQueue(apiType) {
    switch (apiType) {
      case 'REST':
        this.processFIFOQueue();
        break;
      case 'GraphQL':
        this.processPriorityQueue();
        break;
      case 'gRPC':
        this.processRoundRobinQueue();
        break;
      default:
        logger.error(`Unknown API type: ${apiType}`);
    }
  }

  processFIFOQueue() {
    const request = this.queues.REST.dequeue();
    if (request !== 'Underflow') {
      logger.info(`Processing request from FIFO queue. Queue size: ${this.queues.REST.size()}`);
      // Process the request
    } else {
      logger.info(`No requests to process in FIFO queue.`);
    }
  }

  processPriorityQueue() {
    const request = this.queues.GraphQL.dequeue();
    if (request !== 'Underflow') {
      logger.info(`Processing request from Priority queue. Queue size: ${this.queues.GraphQL.size()}`);
      // Process the request
    } else {
      logger.info(`No requests to process in Priority queue.`);
    }
  }

  processRoundRobinQueue() {
    const request = this.queues.gRPC.dequeue();
    if (request !== 'Underflow') {
      logger.info(`Processing request from RoundRobin queue. Queue size: ${this.queues.gRPC.size()}`);
      // Process the request
    } else {
      logger.info(`No requests to process in RoundRobin queue.`);
    }
  }

  getQueueSize(apiType) {
    switch (apiType) {
      case 'REST':
        return this.queues.REST.size();
      case 'GraphQL':
        return this.queues.GraphQL.size();
      case 'gRPC':
        return this.queues.gRPC.size();
      default:
        logger.error(`Unknown API type: ${apiType}`);
        return 0;
    }
  }

  getAllQueueSizes() {
    return {
      REST: this.queues.REST.size(),
      GraphQL: this.queues.GraphQL.size(),
      gRPC: this.queues.gRPC.size(),
    };
  }
}

export default QueueManager;
