import React from "react";

const UserDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
