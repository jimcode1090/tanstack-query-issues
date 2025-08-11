import {useQuery} from "@tanstack/react-query";
import {getLabels} from "../actions";


export const useLabel = () => {


    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels
    });

    return {
        labelsQuery
    }
}