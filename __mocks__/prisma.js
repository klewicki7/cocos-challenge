// Simple PrismaClient mock for unit tests
class PrismaClient {
  constructor() {}
  orders = {
    findMany: jest.fn(),
    create: jest.fn(),
    findFirst: jest.fn(),
  };
  instruments = {
    findMany: jest.fn(),
    findUnique: jest.fn(),
  };
  marketdata = {
    findMany: jest.fn(),
    findFirst: jest.fn(),
  };
}

module.exports = { PrismaClient }; 