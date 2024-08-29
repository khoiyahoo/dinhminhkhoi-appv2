import { API } from "@/constants/apiRoute";
import { IExperience } from "@/interfaces/Experience";
import api, { MappedResponse, requestHandler } from "@/services/configApi";

export const ExperienceService = {
  async getExperiences(): Promise<MappedResponse<IExperience[]>> {
    const callApi = () => {
      return api.get(API.EXPERIENCES);
    };
    return requestHandler(callApi);
  },
};
