import { API } from "@/constants/apiRoute";
import { type IProjects } from "@/interfaces/Projects";
import api, { type MappedResponse, requestHandler } from "@/services/configApi";

export const ProjectsService = {
  async getProjects(): Promise<MappedResponse<IProjects[]>> {
    const callApi = () => {
      return api.get(API.PROJECTS);
    };
    return requestHandler(callApi);
  },
};
