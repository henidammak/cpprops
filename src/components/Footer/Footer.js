import React from "react";
import PropTypes from 'prop-types';
const Footer = ({shop}) => {
  return (
    <div className="Footer">
      <div className="row">
        <div className="col-md-1">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MCI+PHBhdGggZmlsbD0iIzIzMWYyMCIgZD0iTTExLjY0IDQ5LjYxdi0zLjNhMiAyIDAgMCAwLTEuODItMi4wOWgtLjI0YTIgMiAwIDAgMC0xLjg1LjkzQTEuOTMgMS45MyAwIDAgMCA2IDQ0LjIzYTEuNzQgMS43NCAwIDAgMC0xLjU0Ljc3di0uNjVIMy4zMnY1LjI1aDEuMTV2LTIuODdhMS4yMyAxLjIzIDAgMCAxIDEuMDUtMS4zOWguMjNjLjc2IDAgMS4xNC40OSAxLjE0IDEuMzh2Mi45MmgxLjE2di0yLjkxYTEuMjQgMS4yNCAwIDAgMSAxLjA2LTEuMzloLjIyYy43OCAwIDEuMTUuNDkgMS4xNSAxLjM4djIuOTJ6bTE3LjA3LTUuMjVoLTEuODh2LTEuNTloLTEuMTV2MS41OWgtMXYxaDEuMDJ2Mi40MmMwIDEuMjIuNDcgMS45NCAxLjgyIDEuOTRhMi42OCAyLjY4IDAgMCAwIDEuNDgtLjM2bC0uMzMtMWEyLjExIDIuMTEgMCAwIDEtMSAuM2MtLjU1IDAtLjc2LS4zNS0uNzYtLjg4di0yLjRoMS44N3ptOS43NS0uMTNhMS41NSAxLjU1IDAgMCAwLTEuMzguNzd2LS42NGgtMS4xNHY1LjI1aDEuMTR2LTIuOTRjMC0uODcuMzctMS4zNSAxLjEtMS4zNWExLjg2IDEuODYgMCAwIDEgLjcxLjEzbC4zNS0xLjFhMi40NCAyLjQ0IDAgMCAwLS44MS0uMTR6bS0xNC43My41NWEzLjkzIDMuOTMgMCAwIDAtMi4xNC0uNTVjLTEuMzMgMC0yLjIuNjQtMi4yIDEuNjggMCAuODYuNjQgMS4zOCAxLjgxIDEuNTVsLjU1LjA4Yy42My4wOS45Mi4yNS45Mi41NXMtLjQyLjY0LTEuMi42NGEyLjggMi44IDAgMCAxLTEuNzUtLjU1bC0uNTUuODlhMy43OSAzLjc5IDAgMCAwIDIuMjcuNjhjMS41MiAwIDIuNC0uNzEgMi40LTEuNzFzLS42OS0xLjQxLTEuODMtMS41N2wtLjU1LS4wOGMtLjQ5LS4wNy0uODktLjE2LS44OS0uNTJzLjM3LS42MiAxLS42MmEzLjM4IDMuMzggMCAwIDEgMS42NS40NXptMzAuNjEtLjU1YTEuNTUgMS41NSAwIDAgMC0xLjM4Ljc3di0uNjRoLTEuMTV2NS4yNUg1M3YtMi45NGMwLS44Ny4zNy0xLjM1IDEuMS0xLjM1YTEuODYgMS44NiAwIDAgMSAuNzEuMTNsLjM1LTEuMWEyLjQ0IDIuNDQgMCAwIDAtLjgxLS4xNHpNMzkuNjEgNDdhMi42NSAyLjY1IDAgMCAwIDIuNTUgMi43NWguMjVhMi43NSAyLjc1IDAgMCAwIDEuODktLjYzbC0uNTUtLjkyYTIuMzEgMi4zMSAwIDAgMS0xLjM3LjQ3IDEuNjkgMS42OSAwIDAgMSAwLTMuMzYgMi4zMSAyLjMxIDAgMCAxIDEuMzcuNDdsLjU1LS45MmEyLjc1IDIuNzUgMCAwIDAtMS44OS0uNjMgMi42NSAyLjY1IDAgMCAwLTIuOCAyLjV2LjI1em0xMC43IDB2LTIuNjRoLTEuMTRWNDVhMiAyIDAgMCAwLTEuNjUtLjc3IDIuNzUgMi43NSAwIDEgMCAwIDUuNDkgMiAyIDAgMCAwIDEuNjUtLjcydi42NGgxLjE0em0tNC4yNSAwYTEuNTggMS41OCAwIDEgMSAwIC4xMnMtLjAxLS4xMiAwLS4xMnptLTEzLjc5LTIuNzdhMi43NSAyLjc1IDAgMSAwIC4wOCA1LjQ5IDMuMTkgMy4xOSAwIDAgMCAyLjE4LS43MmwtLjUzLS44NGEyLjUgMi41IDAgMCAxLTEuNTMuNTUgMS40NiAxLjQ2IDAgMCAxLTEuNTctMS4yOWgzLjlWNDdhMi41IDIuNSAwIDAgMC0yLjQ5LTIuNzV6bTAgMWExLjMgMS4zIDAgMCAxIDEuMzMgMS4yN2gtMi43NWExLjM1IDEuMzUgMCAwIDEgMS40LTEuMjd6TTYwLjkgNDd2LTQuNzVoLTEuMVY0NWEyIDIgMCAwIDAtMS42NS0uNzcgMi43NSAyLjc1IDAgMSAwIDAgNS40OUEyIDIgMCAwIDAgNTkuOCA0OXYuNjRoMS4xem0xLjkxIDEuODZhLjUzLjUzIDAgMCAxIC40OS4zMS41MS41MSAwIDAgMSAwIC40MS41Mi41MiAwIDAgMS0uMjkuMjcuNTIuNTIgMCAwIDEtLjIxIDAgLjU1LjU1IDAgMCAxLS40OS0uMzIuNTIuNTIgMCAwIDEgMC0uNDEuNTMuNTMgMCAwIDEgLjUxLS4zMXptMCAuOTNhLjM5LjM5IDAgMCAwIC4xNiAwIC40MS40MSAwIDAgMCAuMTMtLjA5LjQuNCAwIDAgMC0uMS0uNy40LjQgMCAwIDAtLjE2IDAgLjQxLjQxIDAgMCAwLS4xNiAwIC40LjQgMCAwIDAtLjEzLjA5LjQuNCAwIDAgMCAuMzEuNjd6bTAtLjY1YS4yMi4yMiAwIDAgMSAuMTQgMCAuMTQuMTQgMCAwIDEgMCAuMTIuMTMuMTMgMCAwIDEgMCAuMS4xOS4xOSAwIDAgMS0uMTIgMGwuMTYuMThoLS4xM2wtLjE1LS4xOHYuMThoLS4xdi0uNDh6bS0uMTIuMDl2LjEzaC4xOS0uMDd6bS02LTIuMjNhMS41OCAxLjU4IDAgMSAxIDAgLjEybC0uMDItLjEyem0tMzguNiAwdi0yLjY0aC0xLjE0VjQ1YTIgMiAwIDAgMC0xLjY1LS43NyAyLjc1IDIuNzUgMCAxIDAgMCA1LjQ5IDIgMiAwIDAgMCAxLjY1LS43MnYuNjRoMS4xNHptLTQuMjUgMGExLjQ3IDEuNDcgMCAxIDEgMCAuMTRWNDd6Ii8+PHBhdGggZmlsbD0iI2ZmNWYwMCIgZD0iTTIzLjM1IDQuMzRoMTcuMzF2MzEuMUgyMy4zNXoiLz48cGF0aCBmaWxsPSIjZWIwMDFiIiBkPSJNMjQuNDUgMTkuODlBMTkuNzQgMTkuNzQgMCAwIDEgMzIgNC4zNGExOS43OCAxOS43OCAwIDEgMCAwIDMxLjEgMTkuNzQgMTkuNzQgMCAwIDEtNy41NS0xNS41NXoiLz48cGF0aCBmaWxsPSIjZjc5ZTFiIiBkPSJNNjQgMTkuODlhMTkuNzggMTkuNzggMCAwIDEtMzIgMTUuNTUgMTkuNzggMTkuNzggMCAwIDAgMC0zMS4xIDE5Ljc4IDE5Ljc4IDAgMCAxIDMyIDE1LjU1em0tMS44OSAxMi4yNXYtLjY0aC4yNnYtLjEzaC0uNjV2LjEzSDYydi42NHptMS4yNyAwdi0uNzdoLS4ybC0uMjMuNTUtLjIzLS41NWgtLjE4di43N2guMTR2LS41OGwuMjEuNUg2M2wuMjEtLjV2LjU4eiIvPjwvc3ZnPg=="
            alt=""
            height="40px"
          />
        </div>
        <div className="col-md-1">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCAxNiI+PHBhdGggZmlsbD0iIzI1M2I4MCIgZD0iTTIzLjkzIDMuNjhoLTMuNTRhLjQ5LjQ5IDAgMCAwLS40OS40MmwtMS40MyA5LjA4YS4yOS4yOSAwIDAgMCAuMjkuMzRoMS42OWEuNDkuNDkgMCAwIDAgLjQ5LS40MmwuMzktMi40NWEuNDkuNDkgMCAwIDEgLjQ5LS40MmgxLjEyYTMuNjQgMy42NCAwIDAgMCA0LTMuMzcgMi43MyAyLjczIDAgMCAwLS40NS0yLjI5IDMuMjkgMy4yOSAwIDAgMC0yLjU2LS44OXpNMjQuMzQgN2MtLjE5IDEuMjctMS4xNiAxLjI3LTIuMSAxLjI3aC0uNTRsLjM3LTIuMzdhLjMuMyAwIDAgMSAuMjktLjI1aC4yNGMuNjQgMCAxLjI0IDAgMS41NS4zNmExLjE4IDEuMTggMCAwIDEgLjE5Ljk5em0xMC4xOCAwaC0xLjdhLjMuMyAwIDAgMC0uMjkuMjVsLS4wOC40Ny0uMTItLjE3YTIuNDEgMi40MSAwIDAgMC0yLS43MSAzLjkgMy45IDAgMCAwLTMuNzkgMy40MSAzLjIgMy4yIDAgMCAwIC42MyAyLjYxIDIuNjUgMi42NSAwIDAgMCAyLjE0Ljg2IDMuMjUgMy4yNSAwIDAgMCAyLjM1LTFsLS4wOC40N2EuMy4zIDAgMCAwIC4yOS4zNGgxLjUzYS40OS40OSAwIDAgMCAuNDktLjQybC45Mi01LjhhLjI5LjI5IDAgMCAwLS4yOS0uMzF6bS0yLjM2IDMuM2ExLjg5IDEuODkgMCAwIDEtMS45MSAxLjYyIDEuMzEgMS4zMSAwIDAgMS0xLjQtMS42NSAxLjkgMS45IDAgMCAxIDEuOS0xLjYzIDEuNDMgMS40MyAwIDAgMSAxLjEzLjQ2IDEuNDcgMS40NyAwIDAgMSAuMjcgMS4xNnpNNDMuNTUgN2gtMS43YS40OS40OSAwIDAgMC0uNDEuMjJsLTIuMzUgMy40Ni0xLTMuMzNhLjQ5LjQ5IDAgMCAwLS40Ny0uMzVoLTEuNjhhLjMuMyAwIDAgMC0uMjguMzlsMS44OCA1LjUxLTEuNzYgMi40OWEuMy4zIDAgMCAwIC4yNC40N2gxLjdhLjQ5LjQ5IDAgMCAwIC40LS4yMWw1LjY3LTguMThhLjMuMyAwIDAgMC0uMjQtLjQ3eiIvPjxwYXRoIGZpbGw9IiMxNzliZDciIGQ9Ik00OS4xOSAzLjY4aC0zLjU0YS40OS40OSAwIDAgMC0uNDkuNDJsLTEuNDMgOS4wOGEuMjkuMjkgMCAwIDAgLjI5LjM0aDEuODJhLjM0LjM0IDAgMCAwIC4zNC0uMjlsLjQxLTIuNTdhLjQ5LjQ5IDAgMCAxIC40OS0uNDJoMS4xMmEzLjY0IDMuNjQgMCAwIDAgNC0zLjM3IDIuNzMgMi43MyAwIDAgMC0uNDUtMi4yOSAzLjI4IDMuMjggMCAwIDAtMi41Ni0uOXpNNDkuNiA3Yy0uMTkgMS4yNy0xLjE2IDEuMjctMi4xIDEuMjdINDdsLjM4LTIuMzdhLjI5LjI5IDAgMCAxIC4yOS0uMjVoLjI0Yy42NCAwIDEuMjQgMCAxLjU1LjM2YTEuMTggMS4xOCAwIDAgMSAuMTQuOTl6bTEwLjE4IDBoLTEuN2EuMjkuMjkgMCAwIDAtLjI5LjI1bC0uMDguNDctLjEyLS4xN2EyLjQxIDIuNDEgMCAwIDAtMi0uNzEgMy45IDMuOSAwIDAgMC0zLjc5IDMuNDEgMy4yIDMuMiAwIDAgMCAuNjMgMi42MSAyLjY2IDIuNjYgMCAwIDAgMi4xNC44NiAzLjI1IDMuMjUgMCAwIDAgMi4zNS0xbC0uMDguNDdhLjMuMyAwIDAgMCAuMjkuMzRoMS41M2EuNDkuNDkgMCAwIDAgLjQ5LS40MmwuOTItNS44YS4zLjMgMCAwIDAtLjI5LS4zMXptLTIuMzYgMy4zYTEuODkgMS44OSAwIDAgMS0xLjkxIDEuNjIgMS4zMSAxLjMxIDAgMCAxLTEuNC0xLjY1QTEuOSAxLjkgMCAwIDEgNTYgOC42YTEuNDMgMS40MyAwIDAgMSAxLjEzLjQ2IDEuNDYgMS40NiAwIDAgMSAuMjggMS4yem00LjM2LTYuMzdsLTEuNDUgOS4yNWEuMjkuMjkgMCAwIDAgLjI5LjM0aDEuNDZhLjQ5LjQ5IDAgMCAwIC40OS0uNDJMNjQgNGEuMy4zIDAgMCAwLS4yOS0uMzRoLTEuNjRhLjMuMyAwIDAgMC0uMjkuMjd6Ii8+PHBhdGggZmlsbD0iIzI1M2I4MCIgZD0iTTMuNzYgMTUuMjhMNCAxMy41NkguNTVsMi0xMi43YS4xNy4xNyAwIDAgMSAuMDYtLjEuMTYuMTYgMCAwIDEgLjExIDBoNC44NWMxLjYxIDAgMi43My4zNCAzLjMxIDFhMi4yOCAyLjI4IDAgMCAxIC41MyAxIDMuNTggMy41OCAwIDAgMSAwIDEuMzd2LjM5bC4yNy4xNWExLjkxIDEuOTEgMCAwIDEgLjU1LjQyIDIgMiAwIDAgMSAuNDUgMSA0LjI1IDQuMjUgMCAwIDEtLjA2IDEuNDYgNS4xMyA1LjEzIDAgMCAxLS42MiAxLjYgMy4zOSAzLjM5IDAgMCAxLS45NSAxIDMuODMgMy44MyAwIDAgMS0xLjI3LjU3IDYuMzUgNi4zNSAwIDAgMS0xLjU5LjE4aC0uMzZhMS4xNCAxLjE0IDAgMCAwLTEuMTIgMXYuMTVsLS40OCAzdi4xMWEuMS4xIDAgMCAxIDAgLjA2eiIvPjxwYXRoIGZpbGw9IiMxNzliZDciIGQ9Ik0xMS45NCA0LjE2di4yOGMtLjY0IDMuMjktMi44MyA0LjQzLTUuNjMgNC40M0g0LjgzYS42OS42OSAwIDAgMC0uNjguNTlsLS43MyA0LjYzLS4yMSAxLjMxYS4zNi4zNiAwIDAgMCAuMzYuNDJINi4xYS42MS42MSAwIDAgMCAuNi0uNTF2LS4xM2wuNDgtM3YtLjE3YS42MS42MSAwIDAgMSAuNi0uNTFoLjM4YzIuNDUgMCA0LjM3LTEgNC45My0zLjg3YTMuMyAzLjMgMCAwIDAtLjUxLTIuOTEgMi40MiAyLjQyIDAgMCAwLS42NC0uNTZ6Ii8+PHBhdGggZmlsbD0iIzIyMmQ2NSIgZD0iTTExLjI3IDMuODlMMTEgMy44MWwtLjMyLS4wNmE3LjkyIDcuOTIgMCAwIDAtMS4yNi0uMDlINS41OGEuNjEuNjEgMCAwIDAtLjYuNTFMNC4xNyA5LjN2LjE1YS42OS42OSAwIDAgMSAuNjgtLjU5aDEuNGMyLjggMCA1LTEuMTQgNS42My00LjQzdi0uMjhhMy40MSAzLjQxIDAgMCAwLS41My0uMjJ6Ii8+PHBhdGggZmlsbD0iIzI1M2I4MCIgZD0iTTUgNC4xN2EuNjEuNjEgMCAwIDEgLjYtLjUxaDMuNzlhNy45MiA3LjkyIDAgMCAxIDEuMjYuMDlsLjMyLjA2LjMuMDhoLjE0YTMuNDcgMy40NyAwIDAgMSAuNTMuMjIgMy4xMSAzLjExIDAgMCAwLS42Ni0yLjc5QzEwLjU1LjU0IDkuMjUuMTkgNy41Ny4xOUgyLjcxQS42OS42OSAwIDAgMCAyIC43N0wwIDEzLjZhLjQyLjQyIDAgMCAwIC40MS40OGgzbC43Ni00Ljc4eiIvPjwvc3ZnPg=="
            alt=""
            height="18px"
          />
        </div>
        <div className="col-md-1">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA0MS41Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAuNDJoNjR2NDAuNjVIMHoiLz48cGF0aCBmaWxsPSIjZjdiNjAwIiBkPSJNMS4wNyAzNC40N2g2MS44N3Y1LjU1SDEuMDd6Ii8+PHBhdGggZmlsbD0iIzFhMWY3MSIgZD0iTTEuMDcgMS40OWg2MS44N3Y1LjU1SDEuMDd6bTI0Ljc2IDExLjY2bC02LjM5IDE1LjI0aC00LjE3bC0zLjE0LTEyLjE2YTEuNjcgMS42NyAwIDAgMC0uOTQtMS4zNCAxNi41IDE2LjUgMCAwIDAtMy44OS0xLjNsLjA5LS40NGg2LjcxYTEuODQgMS44NCAwIDAgMSAxLjgyIDEuNTVsMS42NiA4LjgyIDQuMS0xMC4zOHptMTYuMzQgMTAuMjdjMC00LTUuNTYtNC4yNS01LjUyLTYgMC0uNTUuNTMtMS4xMyAxLjY3LTEuMjhhNy40NSA3LjQ1IDAgMCAxIDMuODkuNjhsLjY5LTMuMjNhMTAuNjMgMTAuNjMgMCAwIDAtMy42OS0uNjdjLTMuOSAwLTYuNjQgMi4wNy02LjY2IDUgMCAyLjIgMiAzLjQyIDMuNDUgNC4xNXMyIDEuMjEgMiAxLjkzYzAgMS0xLjIzIDEuNDgtMi4zNiAxLjQ5YTguMjQgOC4yNCAwIDAgMS00LjA1LTFsLS43MiAzLjM0YTEyIDEyIDAgMCAwIDQuMzguODFjNC4xNSAwIDYuODYtMiA2Ljg3LTUuMjJtMTAuMyA1aDMuNjVsLTMuMTUtMTUuMjdoLTMuMzZhMS44IDEuOCAwIDAgMC0xLjY4IDEuMTJMNDIgMjguMzloNC4xbC44Mi0yLjI4SDUyek00OC4wNiAyM2wyLjA4LTUuNzNMNTEuMzMgMjN6bS0xNi41OS05Ljg1TDI4LjIgMjguMzloLTMuOTRsMy4yNi0xNS4yNXoiLz48L3N2Zz4="
            alt=""
            height="40px"
          />
        </div>
        <div className="col-md-1">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MCI+PHBhdGggZmlsbD0iIzIzMWYyMCIgZD0iTTExLjY0IDQ5LjYxdi0zLjNhMiAyIDAgMCAwLTEuODItMi4wOWgtLjI0YTIgMiAwIDAgMC0xLjg1LjkzQTEuOTMgMS45MyAwIDAgMCA2IDQ0LjIzYTEuNzQgMS43NCAwIDAgMC0xLjU0Ljc3di0uNjVIMy4zMnY1LjI1aDEuMTV2LTIuODdhMS4yMyAxLjIzIDAgMCAxIDEuMDUtMS4zOWguMjNjLjc2IDAgMS4xNC40OSAxLjE0IDEuMzh2Mi45MmgxLjE2di0yLjkxYTEuMjQgMS4yNCAwIDAgMSAxLjA2LTEuMzloLjIyYy43OCAwIDEuMTUuNDkgMS4xNSAxLjM4djIuOTJ6bTE3LjA3LTUuMjVoLTEuODh2LTEuNTloLTEuMTV2MS41OWgtMXYxaDEuMDJ2Mi40MmMwIDEuMjIuNDcgMS45NCAxLjgyIDEuOTRhMi42OCAyLjY4IDAgMCAwIDEuNDgtLjM2bC0uMzMtMWEyLjExIDIuMTEgMCAwIDEtMSAuM2MtLjU1IDAtLjc2LS4zNS0uNzYtLjg4di0yLjRoMS44N3ptOS43NS0uMTNhMS41NSAxLjU1IDAgMCAwLTEuMzguNzd2LS42NGgtMS4xNHY1LjI1aDEuMTR2LTIuOTRjMC0uODcuMzctMS4zNSAxLjEtMS4zNWExLjg2IDEuODYgMCAwIDEgLjcxLjEzbC4zNS0xLjFhMi40NCAyLjQ0IDAgMCAwLS44MS0uMTR6bS0xNC43My41NWEzLjkzIDMuOTMgMCAwIDAtMi4xNC0uNTVjLTEuMzMgMC0yLjIuNjQtMi4yIDEuNjggMCAuODYuNjQgMS4zOCAxLjgxIDEuNTVsLjU1LjA4Yy42My4wOS45Mi4yNS45Mi41NXMtLjQyLjY0LTEuMi42NGEyLjggMi44IDAgMCAxLTEuNzUtLjU1bC0uNTUuODlhMy43OSAzLjc5IDAgMCAwIDIuMjcuNjhjMS41MiAwIDIuNC0uNzEgMi40LTEuNzFzLS42OS0xLjQxLTEuODMtMS41N2wtLjU1LS4wOGMtLjQ5LS4wNy0uODktLjE2LS44OS0uNTJzLjM3LS42MiAxLS42MmEzLjM4IDMuMzggMCAwIDEgMS42NS40NXptMzAuNjEtLjU1YTEuNTUgMS41NSAwIDAgMC0xLjM4Ljc3di0uNjRoLTEuMTV2NS4yNUg1M3YtMi45NGMwLS44Ny4zNy0xLjM1IDEuMS0xLjM1YTEuODYgMS44NiAwIDAgMSAuNzEuMTNsLjM1LTEuMWEyLjQ0IDIuNDQgMCAwIDAtLjgxLS4xNHpNMzkuNjEgNDdhMi42NSAyLjY1IDAgMCAwIDIuNTUgMi43NWguMjVhMi43NSAyLjc1IDAgMCAwIDEuODktLjYzbC0uNTUtLjkyYTIuMzEgMi4zMSAwIDAgMS0xLjM3LjQ3IDEuNjkgMS42OSAwIDAgMSAwLTMuMzYgMi4zMSAyLjMxIDAgMCAxIDEuMzcuNDdsLjU1LS45MmEyLjc1IDIuNzUgMCAwIDAtMS44OS0uNjMgMi42NSAyLjY1IDAgMCAwLTIuOCAyLjV2LjI1em0xMC43IDB2LTIuNjRoLTEuMTRWNDVhMiAyIDAgMCAwLTEuNjUtLjc3IDIuNzUgMi43NSAwIDEgMCAwIDUuNDkgMiAyIDAgMCAwIDEuNjUtLjcydi42NGgxLjE0em0tNC4yNSAwYTEuNTggMS41OCAwIDEgMSAwIC4xMnMtLjAxLS4xMiAwLS4xMnptLTEzLjc5LTIuNzdhMi43NSAyLjc1IDAgMSAwIC4wOCA1LjQ5IDMuMTkgMy4xOSAwIDAgMCAyLjE4LS43MmwtLjUzLS44NGEyLjUgMi41IDAgMCAxLTEuNTMuNTUgMS40NiAxLjQ2IDAgMCAxLTEuNTctMS4yOWgzLjlWNDdhMi41IDIuNSAwIDAgMC0yLjQ5LTIuNzV6bTAgMWExLjMgMS4zIDAgMCAxIDEuMzMgMS4yN2gtMi43NWExLjM1IDEuMzUgMCAwIDEgMS40LTEuMjd6TTYwLjkgNDd2LTQuNzVoLTEuMVY0NWEyIDIgMCAwIDAtMS42NS0uNzcgMi43NSAyLjc1IDAgMSAwIDAgNS40OUEyIDIgMCAwIDAgNTkuOCA0OXYuNjRoMS4xem0xLjkxIDEuODZhLjUzLjUzIDAgMCAxIC40OS4zMS41MS41MSAwIDAgMSAwIC40MS41Mi41MiAwIDAgMS0uMjkuMjcuNTIuNTIgMCAwIDEtLjIxIDAgLjU1LjU1IDAgMCAxLS40OS0uMzIuNTIuNTIgMCAwIDEgMC0uNDEuNTMuNTMgMCAwIDEgLjUxLS4zMXptMCAuOTNhLjM5LjM5IDAgMCAwIC4xNiAwIC40MS40MSAwIDAgMCAuMTMtLjA5LjQuNCAwIDAgMC0uMS0uNy40LjQgMCAwIDAtLjE2IDAgLjQxLjQxIDAgMCAwLS4xNiAwIC40LjQgMCAwIDAtLjEzLjA5LjQuNCAwIDAgMCAuMzEuNjd6bTAtLjY1YS4yMi4yMiAwIDAgMSAuMTQgMCAuMTQuMTQgMCAwIDEgMCAuMTIuMTMuMTMgMCAwIDEgMCAuMS4xOS4xOSAwIDAgMS0uMTIgMGwuMTYuMThoLS4xM2wtLjE1LS4xOHYuMThoLS4xdi0uNDh6bS0uMTIuMDl2LjEzaC4xOS0uMDd6bS02LTIuMjNhMS41OCAxLjU4IDAgMSAxIDAgLjEybC0uMDItLjEyem0tMzguNiAwdi0yLjY0aC0xLjE0VjQ1YTIgMiAwIDAgMC0xLjY1LS43NyAyLjc1IDIuNzUgMCAxIDAgMCA1LjQ5IDIgMiAwIDAgMCAxLjY1LS43MnYuNjRoMS4xNHptLTQuMjUgMGExLjQ3IDEuNDcgMCAxIDEgMCAuMTRWNDd6Ii8+PHBhdGggZmlsbD0iI2ZmNWYwMCIgZD0iTTIzLjM1IDQuMzRoMTcuMzF2MzEuMUgyMy4zNXoiLz48cGF0aCBmaWxsPSIjZWIwMDFiIiBkPSJNMjQuNDUgMTkuODlBMTkuNzQgMTkuNzQgMCAwIDEgMzIgNC4zNGExOS43OCAxOS43OCAwIDEgMCAwIDMxLjEgMTkuNzQgMTkuNzQgMCAwIDEtNy41NS0xNS41NXoiLz48cGF0aCBmaWxsPSIjZjc5ZTFiIiBkPSJNNjQgMTkuODlhMTkuNzggMTkuNzggMCAwIDEtMzIgMTUuNTUgMTkuNzggMTkuNzggMCAwIDAgMC0zMS4xIDE5Ljc4IDE5Ljc4IDAgMCAxIDMyIDE1LjU1em0tMS44OSAxMi4yNXYtLjY0aC4yNnYtLjEzaC0uNjV2LjEzSDYydi42NHptMS4yNyAwdi0uNzdoLS4ybC0uMjMuNTUtLjIzLS41NWgtLjE4di43N2guMTR2LS41OGwuMjEuNUg2M2wuMjEtLjV2LjU4eiIvPjwvc3ZnPg=="
            alt=""
            height="40px"
          />
        </div>
        <div className="col-md-1">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA0MyI+PGcgbWFzaz0idXJsKCNhKSI+PHBhdGggZmlsbD0iI2ViNmY5MyIgZD0iTTAgLjE3aDY0djQyLjY3SDB6Ii8+PC9nPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy44OSAzMC43YzEuNzMgMCAyLjY2LjkyIDIuNjYgMi4yOXMtLjY3IDEuODgtMS45MyAyLjMxbC0uNDYuMTZjLTEuMDcuMzctMS41LjYtMS41IDEuNzh2LjkyaC0xLjU1VjMwLjd6TTE0IDM0Yy43My0uMjEgMS0uNTcgMS0xLjA2cy0uMzktLjg2LTEuMTYtLjg2aC0xLjE5djIuNWEzLjE0IDMuMTQgMCAwIDEgMS0uNDh6bTctMWgxLjQxdjUuMTZIMjF2LS41YTIgMiAwIDAgMS0xLjUzLjYxIDIuNjkgMi42OSAwIDAgMSAwLTUuMzggMiAyIDAgMCAxIDEuNTMuNjF6bS0xLjM4IDMuOTFhMS4zMyAxLjMzIDAgMSAwLTEuMzgtMS4zMyAxLjM0IDEuMzQgMCAwIDAgMS4zNCAxLjM0ek0yNi44IDMzbC0xLjExIDMtMS4xNy0zaC0xLjYzbDIgNC44OWExLjM2IDEuMzYgMCAwIDEtMS4zNC43N2gtLjMzVjQwYTIgMiAwIDAgMCAuNDcgMGMxLjg4IDAgMi4zNy0xLjIxIDMuMTYtMy4yMUwyOC4zNiAzM3ptNy40OS0uMTJhMiAyIDAgMCAwLTEuNTkuNjdWMzNoLTEuNDF2NS4xNmgxLjQ1di0yLjdhMS4xOCAxLjE4IDAgMSAxIDIuMzUgMHYyLjcxaDEuNDV2LTNhMi4xNiAyLjE2IDAgMCAwLTIuMjUtMi4yOHpNNDAgMzguMzFhMi43MiAyLjcyIDAgMSAxIDIuNzgtMi43MkEyLjc2IDIuNzYgMCAwIDEgNDAgMzguMzF6bTAtMS4zN2ExLjM1IDEuMzUgMCAxIDAtMS4zMy0xLjM1QTEuMzMgMS4zMyAwIDAgMCA0MCAzNi45NHpNNTAuMjEgMzNoMS41NGwtMS41OSA1LjE2SDQ4LjVhMTcuNzMgMTcuNzMgMCAwIDEtMS4xOC0yLjY3IDE2LjUzIDE2LjUzIDAgMCAxLTEuMTYgMi42N2gtMS42M0w0Mi45NCAzM2gxLjU0bDEuMDYgMy42NEExMi45MSAxMi45MSAwIDAgMCA0Ni42OCAzM0g0OGExMi4wNiAxMi4wNiAwIDAgMCAxLjE1IDMuNjJ6bTIuNDMgNS4yNWExIDEgMCAxIDEgMS0xIDEgMSAwIDAgMS0xLjAxIDF6TTI5LjcgMjBhMS4xNiAxLjE2IDAgMCAxIDAgMS42M2wtLjA5LjA5YTEuMTYgMS4xNiAwIDAgMS0xLjYzIDBsLTIuNTMtMi41MmMtLjctLjcxLS44MS0xLjU4LS4zNi0ybC4wOS0uMDlhMSAxIDAgMCAxIDEuMzktLjExLjQ2LjQ2IDAgMSAwIC41Ny0uNzIgMiAyIDAgMCAwLTIuNjMuMTdsLS4wOS4wOWEyLjM3IDIuMzcgMCAwIDAgLjM3IDMuMzNsMi41NyAyLjU0YTIuMDggMi4wOCAwIDAgMCAyLjkzIDBsLjA5LS4wOWEyLjA3IDIuMDcgMCAwIDAgMC0yLjkyLjQ2LjQ2IDAgMSAwLS42NS42NnpNMjguMTcgNi4yNWwxIDguNjJhLjQ2LjQ2IDAgMCAwIC45MS0uMTFsLTEtOC42NXYtLjA2YTEuMzggMS4zOCAwIDAgMSAuODYtMS42NSAxLjI3IDEuMjcgMCAwIDEgMS41MSAxbDEuODIgNy43OWEuNDYuNDYgMCAwIDAgLjktLjIxbC0xLjgzLTcuNzdhMi4xOSAyLjE5IDAgMCAwLTIuNi0xLjcgMi4yOCAyLjI4IDAgMCAwLTEuNTcgMi43NHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzcuOCAxNi4zN0wzOS44NyA2YTIuMTkgMi4xOSAwIDAgMC0xLjUyLTIuNTUgMi4yOCAyLjI4IDAgMCAwLTIuNzggMS42MkwzMy4yNyAxM2EuNDYuNDYgMCAwIDAgLjg4LjI2bDIuMy03Ljg3YTEuMzYgMS4zNiAwIDAgMSAxLjY1LTEgMS4yNiAxLjI2IDAgMCAxIC45IDEuNDdsLTIuMTEgMTAuMzNhLjQ2LjQ2IDAgMCAwIC45LjE4em0tNS4yMiA5Ljk1YTUuODMgNS44MyAwIDAgMS02LTUuODMuNDYuNDYgMCAwIDAtLjkyIDAgNi43NSA2Ljc1IDAgMCAwIDYuOTUgNi43NS40Ni40NiAwIDEgMCAwLS45MnpNMzEgMTguMjdhMS4xNCAxLjE0IDAgMCAxLS40NS42M2wtLjEuMDdhMS4xNiAxLjE2IDAgMCAxLTEuNi0uMzFsLTItM2MtLjU1LS44My0uNDgtMS43MS4wNS0yLjA3bC4xLS4wN2MuNjgtLjM5IDEuMjUtLjA5IDEuODUuNzdsMS42OCAyLjUxYS40Ni40NiAwIDAgMCAuNzYtLjUxbC0xLjY5LTIuNTFjLS44My0xLjIxLTEuODYtMS43NS0zLjEtMWwtLjEzLjA4YTIuMzggMi4zOCAwIDAgMC0uMyAzLjM1bDIgM2EyLjA4IDIuMDggMCAwIDAgMi44OC41NmwuMS0uMDdhMi4wNiAyLjA2IDAgMCAwIC44Mi0xLjE1LjQ2LjQ2IDAgMCAwLS44OS0uMjV6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM0IDE5LjhhMy40MyAzLjQzIDAgMCAwLTEuNjMgMy4wNi40Ni40NiAwIDAgMCAuOTIgMCAyLjQxIDIuNDEgMCAwIDEgMS40Ny0yLjQ1IDMuMTMgMy4xMyAwIDAgMSAxLjQxLS4xNmguMTJhLjQ2LjQ2IDAgMCAwIC4xOC0uOWwtMy41NC0uNzljLTEuNjYtLjQ1LTEuOTEtMS4wNy0xLjYtMi4wOWExIDEgMCAwIDEgLjgyLS43NyAyLjI3IDIuMjcgMCAwIDEgLjg3IDBoLjE3bDUuMzcgMS4zaC4xYS44Ni44NiAwIDAgMSAuMjcuMiAzIDMgMCAwIDEgLjQ2IDIuM2MtLjM1IDQuMTgtMi4zIDYuNzctNi45MiA2LjczYS40Ni40NiAwIDEgMCAwIC45MmM1LjE5IDAgNy40Ni0zIDcuODQtNy41OGEzLjgxIDMuODEgMCAwIDAtLjctMyAxLjU1IDEuNTUgMCAwIDAtLjg4LS41MWwtNS4zMS0xLjE2LS4yNC0uMDVhMy4xNSAzLjE1IDAgMCAwLTEuMjIgMCAxLjkyIDEuOTIgMCAwIDAtMS41IDEuNGMtLjQ0IDEuNDggMCAyLjY0IDIuMjYgMy4yNXoiLz48L3N2Zz4="
            alt=""
            height="40px"
          />
        </div>
        <div className="col-md-1">{shop}</div>
      </div>
    </div>
  );
}
Footer.defaultProps={
shop:"close"
}
Footer.propTypes = {
  Footer: PropTypes.object,
};

export default Footer;