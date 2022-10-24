/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';


const useFetchHook = (link, api) => {
    const dispatch = useDispatch();
    const fetchData = useCallback(async () => {
        let apiAction;
        switch (api) {
            case "data":
                apiAction = await import("../redux/features/api/apiSlice").then(a => a.apiAction)
                break;
            case "session":
                apiAction = await import("../redux/features/api/sessionSlice").then(a => a.sessionAction)
                break;
            case "order":
                apiAction = await import("../redux/features/api/orderSlice").then(a => a.orderAction)
                break;
            default:
                console.error("No Input")
                break;
        }
        try {
            dispatch(apiAction.loadingTime());
            let getData
            if (/(https?: \/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(link))
                getData = await axios.get("https://fetch.wharang.fun/" + link).then(({ data }) => data);
            else
                getData = await axios.get(link).then(({ data }) => data);

            dispatch(apiAction.successTime(getData));
        } catch {
            dispatch(apiAction.errorTime());
        }
    }, [link]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
};

export default useFetchHook;