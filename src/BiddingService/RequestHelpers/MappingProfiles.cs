﻿using AutoMapper;
using BiddingService.DTOs;
using BiddingService.Models;
using Contracts;

namespace BiddingService.RequestHelpers;

public class MappingProfiles : Profile
{
  public MappingProfiles()
  {
    CreateMap<Bid, BidPlaced>().ReverseMap();
    CreateMap<Bid, BidDto>().ReverseMap();
  }
}
