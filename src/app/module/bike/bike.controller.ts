import { Request, Response } from 'express';

import { BikeServices } from './bike.service';

const createBike = async (req: Request, res: Response) => {
  try {
    //   const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await BikeServices.createBikeIntoDB(req.body);

    res.status(200).json({
      message: 'Bike  created succesfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const filter: any = {};

    if (searchTerm) {
      filter.$or = [
        { name: { $regex: searchTerm, $options: 'i' } },
        { brand: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ];
    }
    const result = await BikeServices.getAllBikesFromDB(filter);

    res.status(200).json({
      success: true,
      message: 'BSikes retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;

    const result = await BikeServices.getSingleBikeFromDB(bikeId);

    res.status(200).json({
      success: true,
      message: 'Bkies retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const updateBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await BikeServices.updateBikeIntoDB(productId, updateData);

    res.send({
      success: true,
      message: 'Bike updated successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const deleteBike = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;

    const result = await BikeServices.deleteBikeFromDB(bikeId);

    res.status(200).json({
      success: true,
      message: 'product is deleted succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
export const BikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
