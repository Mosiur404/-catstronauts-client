import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";

const TRACK = gql`
  query Track($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
  }
`;

export default function Module({ trackId, moduleId }) {
  const { loading, error, data } = useQuery(TRACK, {
    variables: { trackId, moduleId },
  });
  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
}
