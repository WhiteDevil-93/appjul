# Hardcoded Repository in `lib/jules/client.ts` Needs Permanent Fix

## Description

A temporary workaround was implemented in `lib/jules/client.ts` to ensure the repository `https://github.com/sbhavani/dgx-spark-playbooks` is available in the "New Session" dialog's source repository dropdown. This was necessary because the repository was not appearing in the list fetched from the Jules API.

The current implementation manually appends the repository to the list of sources retrieved from the `listSources` API call.

## Problem Statement

Hardcoding specific repositories is not a scalable or maintainable solution. It bypasses the intended mechanism for repository discovery and management through the Jules API.

## Proposed Permanent Fix

Investigate why `https://github.com/sbhavani/dgx-spark-playbooks` (and potentially other user repositories) are not being returned by the `/sources` API endpoint. Possible areas of investigation include:

1.  **API Integration**: Verify the `/sources` endpoint is correctly configured and returning all expected repositories for the authenticated user.
2.  **User Permissions/Connections**: Ensure the user has correctly connected this GitHub repository within the Jules web application (`jules.google.com`).
3.  **Client-side Filtering**: Confirm there isn't any unintended client-side filtering that might be excluding valid repositories. (Initial checks suggest this is not the case, as the `Combobox` component simply renders the provided `options`).
4.  **Feature Request**: If the Jules API does not support dynamically adding or discovering new repositories without explicit connection via the web app, consider a feature request to the Jules API team.

Once the root cause is identified and addressed, the temporary hardcoded entry in `lib/jules/client.ts` should be removed.

## File to be modified

- `lib/jules/client.ts` (remove the temporary hardcoded logic)

## Original Request

"I don't see https://github.com/sbhavani/dgx-spark-playbooks in the repo dropdown"