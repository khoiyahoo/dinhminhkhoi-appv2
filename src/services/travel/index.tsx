import { API } from "@/constants/apiRoute";
import { type ITravel } from "@/interfaces/Travel";
import api, { requestHandler, type MappedResponse } from "@/services/configApi";

export const TravelService = {
  async getTravel(): Promise<MappedResponse<ITravel[]>> {
    const callApi = () => {
      return api.get(API.TRAVEL);
    };
    return requestHandler(callApi);
  },
};
