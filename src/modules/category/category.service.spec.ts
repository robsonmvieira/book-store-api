import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import  CategoryService  from './category.service';
import { Category } from './entities/category.entity';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { FakeCategory } from '../../utils/tests/category.fake'

describe('CategoryService', () => {
  let service: CategoryService;
  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService,
        {
          provide: getRepositoryToken(Category),
          useValue: mockRepository
      }],
    }).compile()

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('list All Category',  () => {
    it('Should be list categories', async () => {
      const cat = FakeCategory.getCategory()
      mockRepository.find.mockReturnValue([cat, cat])

      const categories = await service.findAll()

      expect(categories).toHaveLength(2)
    });
  });

  describe('find Category',  () => {
    it('Should be return a category when correct id is provided', async () => {
      const cat = FakeCategory.getCategory()
      mockRepository.findOne.mockReturnValue(cat)

      const categories = await service.findOne(1)

      expect(categories).toMatchObject({name: cat.name})
    });

    it('Should returns instanceOf NotFoundException when category is not Exists', async () => {
      mockRepository.findOne.mockReturnValue(null)

      expect(service.findOne(2)).rejects.toBeInstanceOf(NotFoundException)
    });
  });

  describe('create a Category',  () => {
    it('Should be able create a new category if pass correct params', async () => {
      const cat = FakeCategory.getCategory()
      mockRepository.save.mockReturnValue(cat)
      const data = {name: 'Any Category'}
      const newCategory = await service.create(data)

      expect(newCategory).toMatchObject({id: cat.id, name: cat.name})

    });

    it('Should returns instanceOf InternalServerErrorException when not be able create a new category', () => {
      mockRepository.save.mockReturnValue(null)
      const data = {name: 'Any Category'}
      expect(service.create(data)).rejects.toBeInstanceOf(InternalServerErrorException)
    });
  });

  describe('update a Category',  () => {
    it('Should be able update a category with correct params', async () => {
      const id = 1;
      const data = { name: 'updated Name' }
      mockRepository.findOne.mockReturnValue({ id, name: data.name })
      const result = await service.update(id, data)

      expect(result).toMatchObject({ id, name: data.name })

    });

    it('Should returns instanceOf NotFoundException  when not be able to find a category by param', () => {
      mockRepository.findOne.mockReturnValue(null)
      expect(service.findOne(3)).rejects.toBeInstanceOf(NotFoundException)
    });
  });

  describe('delete a Category',  () => {
    it('Should be able delete a category with correct Id', async () => {
      mockRepository.delete.mockReturnValue(true)
      const result = await service.remove(1)
      expect(result).toBe(true)

    });

    it('Should returns instanceOf NotFoundException  when not be able to find a category by param', () => {
      mockRepository.findOne.mockReturnValue(null)
      mockRepository.delete.mockReturnValue(null)
      expect(service.remove(3)).rejects.toBeInstanceOf(NotFoundException)
    });
  });

});
